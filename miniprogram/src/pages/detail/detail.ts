import { request } from "../../utils/request"

Page({

  data: {
    gid:"",
    detail:{pics:[]}
  },

  onLoad(options:any) {
    this.setData({
      gid:options.gid
    })
    this.getDetail()
  },

  getDetail(){
      request({
        url:"/goods/detail/"+this.data.gid
      }).then((res:any)=>{
        this.setData({
          detail:res.data.data
        })
      })
  },

  // 点击预览图片
  preImg(e:any){
    let index = e.currentTarget.dataset.index
    let urls = this.data.detail.pics
    wx.previewImage({
      urls,
      current:urls[index]
    })
  },

  navBlack(){
    wx.navigateBack()
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