import Toast from "../../../miniprogram_npm/@vant/weapp/toast/toast"
import { request } from "../../../utils/request"

Page<GoodsDetailVM,GoodsDetailOP>({

  data: {goodsId:null,goodsDetail:null},

  onLoad(options:any) {
    this.setData({goodsId:options.goodsId})
    this.updateGoodsDetail(options.goodsId)
  },

  updateGoodsDetail(goodsId:string){
      request({
        url:"/goods/detail/" + goodsId
      }).then((res:any)=>{
        this.setData({goodsDetail:res.data})
      })
  },

  preImg(e:any){
    let index = e.currentTarget.dataset.index
    let urls = this.data.goodsDetail.imglist
    wx.previewImage({
      urls,
      current:urls[index]
    })
  },

  onClickIcon(){
    request({
      url:"/user/list",
      method:"PUT",
      data:{
        clas: "star-goods",
        method: "add",
        value: this.data.goodsId
      }
    }).then((res)=>{
        if(res.data == true){
          request({
            url:"/user/star-goods",
            method:"GET",
          }).then((res)=>{
            wx.setStorageSync("star-goods",res.data)
          })
        }
    })
    Toast({
      message:'收藏成功',
      type:'success',
      duration:2000
    })
  },

  onClickButton(){
    request({
      url:"/user/list",
      method:"PUT",
      data:{
        clas: "golist",
        method: "add",
        value: this.data.goodsId
      }
    }).then((res)=>{
        if(res.data == true){
          request({
            url:"/user/golist",
            method:"GET",
          }).then((res)=>{
            wx.setStorageSync("golist",res.data)
          })
        }
    })
    Toast({
      message:'添加成功',
      type:'success',
      duration:2000
    })
  }
})