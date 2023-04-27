import { request } from "../../utils/request"

Page({

  data: {
    isLogin:false,
    starG:[{id:""}],
  },

  onShow() {
    let starG = wx.getStorageSync("star-g")
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      starG,
    })
  },

  swipeCell(event:any) {
    if(event.detail == "right"){
      let index = event.currentTarget.dataset.index
      let starG = this.data.starG
      if(event.detail == "right"){
        request({
          url:"/user",
          method:"PUT",
          data:{
            clas:"star-g",
            data:{
              method:"delete",
              value:starG[index].id
            }
          }
        }).then((res:any)=>{
          if(res.data.data == true){
            let starG = this.data.starG
            starG.splice(index,1)
            wx.setStorageSync('star-g', starG)
            this.setData({starG})
          }else{
            wx.showToast({
              icon:"error",
              title:"服务器未知异常"
            })
          }
        })
      }
    }
  },
})