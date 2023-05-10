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
  }
})