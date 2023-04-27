import { request } from "../../utils/request"

Page({

  data: {
    isLogin:false,
    starS:[{id:""}],
  },

  onShow() {
    let starS = wx.getStorageSync("star-s")
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      starS,
    })
  },

  swipeCell(event:any) {
    if(event.detail == "right"){
      let index = event.currentTarget.dataset.index
      let starS = this.data.starS
      if(event.detail == "right"){
        request({
          url:"/user",
          method:"PUT",
          data:{
            clas:"star-s",
            data:{
              method:"delete",
              value:starS[index].id
            }
          }
        }).then((res:any)=>{
          if(res.data.data == true){
            let starS = this.data.starS
            starS.splice(index,1)
            wx.setStorageSync('star-s', starS)
            this.setData({starS})
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