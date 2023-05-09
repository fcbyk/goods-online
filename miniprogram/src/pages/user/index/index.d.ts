interface UserVM{
  cellLsit:Array<Object>  // 页面选项
  collectList:Array<Object> // 页面收藏选项
  isLogin:boolean // 是否已登录
  popupIsShow:boolean // 弹窗的显示和关闭
  userInfo:Object // 用户信息
}

interface UserOP{

  // 打开弹窗
  popup():void

  // 关闭弹窗
  onClosePopup():void

  // 获取用户的收藏集合
  getList(clas:"golist"|"star-goods"|"star-stores"):void

  // 每次显示更新isLogin和userInfo的值
  onShow():void

  // 未登录提示
  logoutToast():void

  // 获取用户发布的商品和店铺
  getRelease():void

  // 点击登录
  login():void

  // 更新登录状态
  setUserInfo():void
}