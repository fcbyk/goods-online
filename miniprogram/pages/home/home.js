
Page({
  data: {
    searchValue:'',
    homeTopStyle:'',
    logoStyle:'',
    logoBoxStyle:'',
    backStyle:''
  },
  onSearch() {
    console.log('搜索' + this.data.searchValue)
    wx.hideTabBar({
      animation: true,
    })
    this.setData({
      homeTopStyle: 'height: 5rem;',
      logoBoxStyle:'padding: 30rpx; padding-top: 100rpx;',
      logoStyle:'display: none;'
    })
    setTimeout(()=>{
      this.setData({
        backStyle:'display: initial;'
      })
    },500)
  },
  back(event) {
    wx.showTabBar({
      animation: true,
    })
    this.setData({
      homeTopStyle: 'height: 15rem;',
      logoBoxStyle:'padding: 180rpx; padding-top: 220rpx;',
      backStyle:'display: none;',
      searchValue:''
    })
    setTimeout(()=>{
      this.setData({
        logoStyle:'display: initial;'
      })
    },500)
    
  }
})