
Page({

  data: {
    isLogin:{},
  },

  onShow() {
    this.setData({
      isLogin:wx.getStorageSync("identity")
    })
  },

  goto(){
    wx.switchTab({
      url:"../tab1/tab1"
    })
  }
})