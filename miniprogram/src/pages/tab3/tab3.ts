import tab3collect from "../../data/tab3collect"
import tab3cell from "../../data/tab3cell"
import { request } from "../../utils/request"
import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast"

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
          url:"/user",
          method:"POST",
          data:{
            jscode:loginRes.code
          }
        }).then((res:any)=>{
          wx.setStorageSync("identity",res.data.data)
          this.setUserInfo()
          this.getList("golist")
          this.getList("star-g")
          this.getList("star-s")
          this.onClose()
        },()=>{
          this.onClose()
        })
      }
    })
  },

  // 获取用户<去买>，<收藏>
  getList(clas:"golist"|"star-g"|"star-s"){
    request({
      url:"/user/"+clas,
      method:"GET",
    }).then((res:any)=>{
      wx.setStorageSync(clas,res.data.data)
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
    // wx.showTabBar({})
  },

  logoutToast(){
    if(!this.data.isLogin){
      Toast({
        message:'未登录',
        type:'fail',
        duration:1000
      })
    }
  }
})