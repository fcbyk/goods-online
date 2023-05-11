import { request } from "../../../utils/request"

Page<any,any>({

  data: {
    isLogin:false,
    starG:[],
  },

  onShow() {
    let starG = wx.getStorageSync("star-goods")
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      starG,
    })
  },

  swipeCell(event:any) {
    let index = event.currentTarget.dataset.index
    let starG = this.data.starG
    if(event.detail == "right"){
      request({
        url:"/user/list",
        method:"PUT",
        data:{
          clas: "star-goods",
          method: "remove",
          value: starG[index].id
        }
      }).then((res)=>{
        if(res.data == true){
          starG.splice(index,1)
          wx.setStorageSync('star-goods', starG)
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
})