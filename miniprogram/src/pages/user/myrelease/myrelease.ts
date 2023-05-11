import Toast from "../../../miniprogram_npm/@vant/weapp/toast/toast"
import { request } from "../../../utils/request"

Page<any,any>({

  data: {
    storeList:[],
    goodsList:[]
  },

  onLoad() {
    request({
      url:"/goods/ofuser",
      method:"GET"
    }).then((res)=>{
      this.setData({
        goodsList:res.data
      })
    })
    request({
      url:"/store/ofuser",
      method:"GET"
    }).then((res)=>{
      this.setData({
        storeList:res.data
      })
    })
  },

  swipeCell(event:any) {
    let index = event.currentTarget.dataset.index
    let goodsList = this.data.goodsList;
    if(event.detail == "right"){
      request({
        url:"/goods/"+goodsList[index].id,
        method:"DELETE",
      }).then((res)=>{
        if(res.data == true){
          goodsList.splice(index,1)
          this.setData({goodsList})
        }else{
          wx.showToast({
            icon:"error",
            title:"服务器未知异常"
          })
        }
      })
    }
    
    if(event.detail == "left"){
      Toast({
        message:'很抱歉，暂不支持修改，如要修改，请删除后再重新发布',
        duration:5000
      })
    }
  },

  swipeCellOfStore(event:any){
    let index = event.currentTarget.dataset.index
    let storeList = this.data.storeList;
    if(event.detail == "right"){
      request({
        url:"/store/"+storeList[index].id,
        method:"DELETE",
      }).then((res)=>{
        if(res.data == true){
          storeList.splice(index,1)
          this.setData({storeList})
        }else{
          wx.showToast({
            icon:"error",
            title:"服务器未知异常"
          })
        }
      })
    }

    if(event.detail == "left"){
      Toast({
        message:'很抱歉，暂不支持修改，如要修改，请删除后再重新发布',
        duration:5000
      })
    }
  }
})