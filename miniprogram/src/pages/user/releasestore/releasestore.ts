import { request } from "../../../utils/request"

Page<any,any>({

  data: {
    name:"",
    type:"",
    location:{},
    note:""
  },

  chooseLocation(){
    wx.chooseLocation({
      success:(res:any)=>{
        delete res.errMsg
        const location = res
        this.setData({location})
      }
    })
  },

  release(){
    request({
      url:"/store",
      method:"POST",
      data:{
        name:this.data.name,
        type:this.data.type,
        location:this.data.location,
        note:this.data.note
      }
    }).then((res)=>{
      if(res.data == true){
        wx.navigateBack()
        wx.showToast({
          title:"发布成功"
        })
      }
    })
  }
})