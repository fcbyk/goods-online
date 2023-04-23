Page({
  data: {
    avatarUrl: "",
    nickname: ""
  },
  onChooseAvatar(e:any) {
    console.log(e)
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },

  // 修改用户信息,上传服务器(目前仅本地修改)
  alterIfon(){
    let temp = wx.getStorageSync("identity")
    temp.avatar = this.data.avatarUrl
    temp.name = this.data.nickname
    wx.setStorageSync("identity",temp)
    wx.switchTab({url:'../tab3/tab3'})
  },

  // 退出登录
  logout(){
    wx.removeStorageSync("wish")
    wx.removeStorage({
      key: 'identity',
      success () {
        wx.switchTab({url:'../tab3/tab3'})
      }
    })
  },

  onShow(){
    let user = wx.getStorageSync("identity")
    this.setData({
      avatarUrl: user.avatar,
      nickname: user.name
    })
  }
})