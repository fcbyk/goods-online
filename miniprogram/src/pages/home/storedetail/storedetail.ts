import { request } from "../../../utils/request"

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
      sid:options.storeId
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
    let store = this.data.store.location
    wx.openLocation({
      address: store.address,
      latitude: store.latitude,
      longitude: store.longitude,
      name: store.name,
    })
  },
})