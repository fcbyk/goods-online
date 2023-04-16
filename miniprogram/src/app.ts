import {request} from "./request/index"

App<IAppOption>({
  globalData: {},
  onLaunch() {
    console.log("hello")
    request({
      url:"/goods-wish/demo",
      method: 'GET'
    }).then((res:any)=>{
      wx.setStorageSync("wish",JSON.stringify(res.data.data))
    })
  }
})