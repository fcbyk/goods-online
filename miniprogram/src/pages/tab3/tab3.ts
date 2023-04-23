import tab3collect from "../../data/tab3collect"
import tab3cell from "../../data/tab3cell"
import { request } from "../../utils/request"

Page({
  data: {
    tab3collect,
    tab3cell,
    isLogin:false,
    user:{},
    show:false
  },

  popup(){
    this.setData({
      show:true
    })
  },

  // 用户点击登录
  login(){
    wx.login({
      timeout:5000,
      success:(loginRes)=>{
        request({
          url:"/user/login",
          method:"POST",
          data:loginRes.code
        }).then((res:any)=>{
          wx.setStorageSync("identity",res.data.data)
          this.setUserInfo()
          this.getWish()
          this.onClose()
        })
      }
    })
  },

  // 获取用户想买的商品列表
  getWish(){
    request({
      url:"/wish",
      method:"GET",
    }).then((res:any)=>{
      wx.setStorageSync("wish",res.data.data)
    })
  },

  // 更新登录状态
  setUserInfo(){
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      user:wx.getStorageSync("identity")
    })
  },

  // 生命周期钩子
  onShow(){
    this.setUserInfo()
  },

  onClose(){
    this.setData({
      show:false
    })
  }
})