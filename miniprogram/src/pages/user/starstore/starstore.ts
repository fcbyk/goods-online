import { request } from "../../../utils/request"

Page<any,any>({

  data: {
    isLogin:false,
    starS:[],
  },

  onShow() {
    let starS = wx.getStorageSync("star-stores")
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
          url:"/user/list",
          method:"PUT",
          data:{
            clas: "star-store",
            method: "remove",
            value: starS[index].id
          }
        }).then((res:any)=>{
          if(res.data == true){
            starS.splice(index,1)
            wx.setStorageSync('star-stores', starS)
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