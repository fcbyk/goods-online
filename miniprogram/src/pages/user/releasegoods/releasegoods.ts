import { request, uploadFile } from "../../../utils/request";

Page<any,any>({

  data: {
    fileList: [],
    name: "",
    imglist: [],
    store: "",
    price: null,
    note: ""
  },

  afterRead(event:any){
    const { file } = event.detail
    console.log(file)
    const { fileList,imglist } = this.data;
    fileList.push(file);
    // 图片上传
    uploadFile(file.url).then((res)=>{
      // 添加上传数组
      imglist.push("https://ali.fcbyk.com/file/"+res.data)
      this.setData({ fileList,imglist })
    })
  },

  delete(event:any){
    const { fileList,imglist } = this.data
     // 删除上传数组
    const str = this.data.imglist[event.detail.index];
    const index = str.lastIndexOf("/");
    const result = str.substring(index + 1);
    // 删除服务器图片
    request({
      url:"/file/"+result,
      method:"DELETE"
    }).then(()=>{
      fileList.splice(event.detail.index, 1)
      imglist.splice(event.detail.index, 1)
      this.setData({ fileList,imglist })
    })
  },

  release(){
    request({
      url:"/goods",
      method:"POST",
      data:{
        name: this.data.name,
        imglist: this.data.imglist,
        store: this.data.store,
        price: this.data.price,
        note: this.data.note
      }
    }).then((res)=>{
      if(res.data == true){
        wx.navigateBack()
        wx.showToast({
          title:"发布成功"
        })
      }else{
        wx.showToast({
          icon:"error",
          title:"未知异常"
        })
      }
    })
  }
})