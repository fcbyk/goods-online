Page({

  data: {
    isLogin:false,
    wish:[],
    sum:0
  },

  onShow() {
    let wish = wx.getStorageSync("wish")
    if(wish){
      this.setSum()
    }
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      wish,
    })
  },

  setSum(){
    let wish = wx.getStorageSync("wish")
    let sum = 0
    wish.forEach((element:any) => {
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
    if(event.detail == "right"){
      let wish = this.data.wish
      wish.splice(event.currentTarget.dataset.index,1)
      wx.setStorageSync('wish', wish)
      this.setSum()
      this.setData({wish})
    }
    
    if(event.detail == "left"){
        console.log(event.currentTarget.dataset.index)
        wx.openLocation({
          address: "海南省三亚市吉阳区育才路1号",
          latitude: 18.315919,
          longitude: 109.532613,
          name: "爱心超市",
        })
    }
  },
})