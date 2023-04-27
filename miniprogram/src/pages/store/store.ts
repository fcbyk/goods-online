import { request } from "../../utils/request"

Page({

  data: {
    sid:"",
    store:{
      address: "",
      latitude: 18.315919,
      longitude: 109.532613,
      name: "",
    }
  },

  onLoad(options:any) {
    this.setData({
      sid:options.store
    })
    request({
      url: '/store/detail/'+ options.store,
      method: 'GET'
    }).then((res:any)=>{
      this.setData({
        store:res.data.data
      })
    })
  },

  goto(){
    let store = this.data.store
    wx.openLocation({
      address: store.address,
      latitude: store.latitude,
      longitude: store.longitude,
      name: store.name,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})