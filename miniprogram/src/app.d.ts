/// <reference path="./pages/home/clas/clas.d.ts" />
/// <reference path="./pages/home/index/index.d.ts" />
/// <reference path="./pages/home/search/search.d.ts" />
/// <reference path="./pages/home/goodsdetail/goodsdetail.d.ts" />
/// <reference path="./pages/home/storedetail/storedetail.d.ts" />
/// <reference path="./pages/user/index/index.d.ts" />
/// <reference path="./pages/user/info/info.d.ts" />
/// <reference path="./utils/utils.d.ts" />


interface AppOP{
  
}

// 视图模型-店铺信息
interface StoreInfoVM{
  id:string // 店铺id
  name:string // 店铺名称
  location:Location // 店铺位置
  goodsNumber:number // 商品数量
  followers:number // 关注人数
}

// 视图模型-商品信息
interface GoodsInfoVM{
  id: string; // 商品id
  tag: string; // 信息标签，开发者，店主，普通用户
  img: string; // 商品主图
  name: string; // 商品名称
  storeId: string; // 商店id
  storeName:string; // 商店名称
  price: number; // 价格
}


// 用户实体
interface User {
  avatar: string; // 头像
  id: string; // 用户id
  name: string; // 昵称
  type: "user" | "admin";
}

// 位置实体
interface Location {

  // 地址的详细说明
  address: string; 

  // 纬度，纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
  latitude: number;

  // 经度，经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
  longitude: number;

  // 位置名
  name: string;
}

interface Result<T>{
    code: "2000"|"5000"; // 响应码
    data: T // 响应数据
    msg: string; // 响应消息
}
