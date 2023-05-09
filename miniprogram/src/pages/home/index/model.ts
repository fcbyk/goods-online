// 默认路径 -> 未开发
let url = "../clas/clas"

// 初始化数据-热海大专区
let campusList:Array<Campus> = [
  {
    icon:"/assets/icon/campus-1.svg",
    title:"校园店铺",
    des:"食堂，自动售货机，超市.....",
    url
  },
  {
    icon:"/assets/icon/campus-2.svg",
    title:"校园二手",
    des:"闲置物品出售,毕业出售.....",
    url
  }
]

// 初始化数据-顶部分类
let clasList:Array<Clas> = [
  {
    icon:"/assets/icon/class-附近.svg",
    name:"附近",
    url
  },
  {
    icon:"/assets/icon/class-最新.svg",
    name:"最新发布",
    url
  },
  {
    icon:"/assets/icon/class-蔬菜.svg",
    name:"买菜",
    url
  },
  {
    icon:"/assets/icon/class-早餐.svg",
    name:"早餐",
    url
  },
  {
    icon:"/assets/icon/class-椰子.svg",
    name:"水果",
    url
  },
  {
    icon:"/assets/icon/class-超市.svg",
    name:"超市",
    url
  },
  {
    icon:"/assets/icon/class-商店.svg",
    name:"便利店",
    url
  },
  {
    icon:"/assets/icon/class-二手.svg",
    name:"二手",
    url
  },
]

export {clasList,campusList}