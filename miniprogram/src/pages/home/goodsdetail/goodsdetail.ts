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
      Toast({
        message:'未登录',
        duration:2000
      })
  },

  onClickButton(){
      let golist = wx.getStorageSync("golist")
      if(!golist) golist = []
      let goods:GoodsInfoVM = {
        id:this.data.goodsId,
        tag: this.data.goodsDetail.tag,
        img: this.data.goodsDetail.imglist[0],
        name: this.data.goodsDetail.name,
        storeId: this.data.goodsDetail.store,
        price: this.data.goodsDetail.price,
      };

      request({
        method:"GET",
        url:"/store/detail/"+goods.storeId
      }).then((res)=>{
        goods.location = res.data.location
        goods.storeName = res.data.name
      }).then(()=>{
        let isObjectInArray:boolean = golist.some((obj:any)=> {
          return obj.id === this.data.goodsId;
        });
        if (!isObjectInArray){
          golist.push(goods)
          wx.setStorageSync("golist",golist)
          Toast({
            message:'添加成功',
            type:'success',
            duration:2000
          })
        }else{
          Toast({
            message:'已存在列表中',
            type:'fail',
            duration:2000
          })
        }
      })
  }
})