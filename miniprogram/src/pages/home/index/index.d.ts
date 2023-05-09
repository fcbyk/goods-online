// 视图模型
interface HomeVM{
  clasList:Array<Clas>,  // 初始化数据-顶部分类
  campusList:Array<Campus>, // 初始化数据-热海大专区
}

// 页面选项
interface HomeOP{

}

// 顶部分类-页面数据
type Clas = {
  icon:string, // 图标路径
  name:string, // 名称
  url:string, // 跳转地址
}

// 热海大专区-页面数据
type Campus = {
  icon: string; // 图标路径
  title: string; // 描述
  des: string; // 名称
  url: string; // 跳转地址
}

