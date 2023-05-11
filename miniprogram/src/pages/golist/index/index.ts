import { request } from "../../../utils/request"


Page<any,any>({

  data: {
    isLogin:false,
    golist:[{
      id:null,
      location:null
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
      url:"../../home/index/index"
    })
  },

  swipeCell(event:any) {
    let index = event.currentTarget.dataset.index
    let golist = this.data.golist
    if(event.detail == "right"){
      request({
        url:"/user/list",
        method:"PUT",
        data:{
          clas: "golist",
          method: "remove",
          value: golist[index].id
        }
      }).then((res)=>{
        if(res.data == true){
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
  },

  noGoing(){
    wx.showToast({
      icon:"error",
      title:"暂不支持...."
    })
  }
})