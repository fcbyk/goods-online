interface GoodsDetailVM{
    goodsId:string | any //商品id
    goodsDetail:Object | any// 商品详情
}

interface GoodsDetailOP{

  // 接收页面参数
  onLoad(options:{goodsId:string}):void

  // 发请求获取商品信息
  updateGoodsDetail(goodsId:string):void

  // 点击预览图片
  preImg(e:any):void

  // 收藏商品
  onClickIcon():void

  // 添加待去买
  onClickButton():void
}