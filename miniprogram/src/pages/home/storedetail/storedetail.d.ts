// 视图模型
interface StoreDetailVM{
  storeId:string // 店铺id
  storeDetail:Object // 店铺详情信息
  goodsList:Array<Object> // 店铺商品列表
}

// 页面选项
interface StoreDetailOP{

  // 接收页面参数，发网络请求
  onLoad(options:{storeId:string}):void

  // 打开地图
  goto():void
}