// 视图模型
interface SearchVM{
  searchValue:string, // 搜索框的值
  searchIsfocus:boolean,  // 搜索框是否聚焦

  searchClasOption:Array<Object>,  // 设置搜索类型
  searchSortOption:Array<Object>,  // 设置搜索的排序类型
  ClasOptionValue:'商品'|'店铺', // 搜索类型的值
  SortOptionValue:'默认排序' | '价格排序' | '距离排序', // 搜索的排序类型的值

  goodsList:Array<Goods> | null, // 商品列表
  storeList:Array<StoreInfoVM> | null // 店铺列表
}

// 页面选项
interface SearchOP{

  // 搜索事件
  onSearch(event:any):void,

  // 搜索并更新商品列表
  updateGoodsList(key:string,sort:string):void,

  // 搜索并更新店铺列表
  updateStoreList(key:string):void,

  // 用户下拉触底事件
  onPullDownRefresh():void
}
