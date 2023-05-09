import { request } from "../../../utils/request"
import Toast from "../../../miniprogram_npm/@vant/weapp/toast/toast"
import {cellLsit,collectList} from "./model"

Page<UserVM,UserOP>({
  data: {
    cellLsit,collectList,
    isLogin:false,
    userInfo:{},
    popupIsShow:false
  },

  popup(){
    this.setData({popupIsShow:true})
  },

  onClosePopup(){
    this.setData({popupIsShow:false})
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
          wx.setStorageSync("identity",res.data)
          this.setUserInfo()
          this.getList("golist")
          this.getList("star-goods")
          this.getList("star-stores")
          this.onClosePopup()
        },()=>{
          this.onClosePopup()
        })
      }
    })
  },

  // 获取用户<去买>，<收藏>
  getList(clas:"golist"|"star-goods"|"star-stores"){
    request({
      url:"/user/"+clas,
      method:"GET",
    }).then((res:any)=>{
      wx.setStorageSync(clas,res.data)
    })
  },

  // 更新登录状态
  setUserInfo(){
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      userInfo:wx.getStorageSync("identity")
    })
  },

  // 生命周期钩子
  onShow(){
    this.setUserInfo()
  },

  logoutToast(){
    if(!this.data.isLogin){
      Toast({
        message:'未登录',
        type:'fail',
        duration:1000
      })
    }
  },

  getRelease(){

  }
})