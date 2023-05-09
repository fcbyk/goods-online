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
    let urls = this.data.goodsDetail.slidePics
    wx.previewImage({
      urls,
      current:urls[index]
    })
  }
})