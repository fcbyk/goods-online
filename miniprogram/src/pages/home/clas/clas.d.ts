interface ClasVM{
  clas:string,
  storeList:Array<StoreInfoVM>
}

interface ClasOP{

  // 页面加载时，接收参数
  onLoad(query:Query):void

  // 网络请求，查询指定分类的店铺，并更新storeList的值
  updateStoreList(clas:string):void

}

// 页面接收的参数对象
type Query = {
  clas:string
}