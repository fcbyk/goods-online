import { request } from "../../utils/request"

Page({

  data: {
    sid:"",
    store:{
      location:{
        address:"",
        latitude:23.23,
        longitude:334.33,
        name:""
      }
    },
    goodsList:[
      {
          gid:"a0001",
          image: "https://ali.fcbyk.com:8080/img/gl/1.png",
          name: "晨光2b铅笔",
          price: 1.03,
          store: "爱心超市"
      },
      {
          gid:"a0002",
          image: "https://img1.baidu.com/it/u=2933328573,573942881&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500",
          name: "可口可乐",
          price: 3.00,
          store: "爱心超市"
      }
  ],
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
      address: store.location.address,
      latitude: store.location.latitude,
      longitude: store.location.longitude,
      name: store.location.name,
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