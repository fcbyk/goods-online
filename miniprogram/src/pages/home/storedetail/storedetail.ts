import Toast from "../../../miniprogram_npm/@vant/weapp/toast/toast"
import { request } from "../../../utils/request"

Page<any,any>({

  data: {
    sid:null,
    store:null,
    goodsList:null,
  },

  onLoad(options:any) {
    this.setData({
      sid:options.storeId
    })
    request({
      url: '/store/detail/'+ options.storeId,
      method: 'GET'
    }).then((res)=>{
      this.setData({
        store:res.data,
        goodsList:res.data.goodsList
      })
    })
  },

  goto(){
    let store = this.data.store.location
    wx.openLocation({
      address: store.address,
      latitude: store.latitude,
      longitude: store.longitude,
      name: store.name,
    })
  },

  onCopyClick() {
    wx.setClipboardData({
      data: this.data.store.id,
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  addstar(){
    request({
      url:"/user/list",
      method:"PUT",
      data:{
        clas: "star-store",
        method: "add",
        value: this.data.sid
      }
    }).then((res)=>{
        if(res.data == true){
          request({
            url:"/user/star-stores",
            method:"GET",
          }).then((res)=>{
            wx.setStorageSync("star-stores",res.data)
          })
        }
    })
    Toast({
      message:'订阅成功',
      type:'success',
      duration:2000
    })
  }
})