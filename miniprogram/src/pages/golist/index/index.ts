import { request } from "../../../utils/request"


Page({

  data: {
    isLogin:false,
    golist:[{
      id:"",
      location:{
        address: "海南省三亚市吉阳区育才路1号",
        latitude: 18.315919,
        longitude: 109.532613,
        name: "爱心超市",
      }
    }],
    sum:0
  },

  onShow() {
    let golist = wx.getStorageSync("golist")
    if(golist){
      this.setSum()
    }
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      golist,
    })
  },

  setSum(){
    let golist = wx.getStorageSync("golist")
    let sum = 0
    golist.forEach((element:any) => {
      sum = sum + element.price
    });
    this.setData({sum})
  },

  goto(){
    wx.switchTab({
      url:"../tab1/tab1"
    })
  },

  swipeCell(event:any) {
    let index = event.currentTarget.dataset.index
    let golist = this.data.golist
    if(event.detail == "right"){
      request({
        url:"/user",
        method:"PUT",
        data:{
          clas:"golist",
          data:{
            method:"delete",
            value:golist[index].id
          }
        }
      }).then((res:any)=>{
        if(res.data.data == true){
          golist.splice(index,1)
          wx.setStorageSync('golist', golist)
          this.setSum()
          this.setData({golist})
        }else{
          wx.showToast({
            icon:"error",
            title:"服务器未知异常"
          })
        }
      })
    }
    
    if(event.detail == "left"){
        let location = this.data.golist[event.currentTarget.dataset.index].location
        wx.openLocation({
          address: location.address,
          latitude: location.latitude,
          longitude: location.longitude,
          name: location.name,
        })
    }
  }
})