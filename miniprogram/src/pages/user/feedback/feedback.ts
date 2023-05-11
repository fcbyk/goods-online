
Page<any,any>({

  copyEmial(){
    wx.setClipboardData({
      data: "731240932@qq.com",
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  copyWX(){
    wx.setClipboardData({
      data: "fcbyk2023",
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }

})