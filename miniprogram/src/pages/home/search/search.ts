import Toast from "../../../miniprogram_npm/@vant/weapp/toast/toast"
import { request } from "./../../../utils/request"
import  {searchClasOption,searchSortOption} from "./model"

Page<SearchVM,SearchOP>({

  data: {
    searchIsfocus:true,
    searchValue:"",

    searchClasOption,searchSortOption,
    ClasOptionValue:"商品", 
    SortOptionValue:"默认排序", 
    
    goodsList:null,
    storeList:null
  },

  // 搜索事件
  onSearch(event:any) {

    // 点击搜索
    if(event.type == "search"){
      this.setData({searchValue:event.detail})
    }

    // 排序判断
    switch(this.data.ClasOptionValue + this.data.SortOptionValue){
      
      case '商品默认排序': 
        this.updateGoodsList(this.data.searchValue,"search")
        break

      case '商品价格排序': 
        this.updateGoodsList(this.data.searchValue,"searchasc")
        break

      case '商品距离排序': 
        Toast('暂不支持距离排序')
        this.setData({SortOptionValue:"默认排序"})
        break

      case '店铺默认排序': 
        this.updateStoreList(this.data.searchValue)
        break

      default:
        this.updateStoreList(this.data.searchValue)
        this.setData({SortOptionValue:"默认排序"})
        Toast('店铺不支持排序')
    }

  },

  // 搜索并更新商品列表
  updateGoodsList(key:string,sort:string){
    request({
      url: '/goods/'+ sort + "/" + key,
      method: 'GET'
    }).then(
      // 成功的回调
      (res:any)=>{
        this.setData({
          storeList:null,
          goodsList:res.data
        })
      }
    )
  },

  // 搜索并更新店铺列表
  updateStoreList(key:string){
    request({
      url: '/store/search/'+ key,
      method: 'GET'
    }).then(
      // 成功的回调
      (res:any)=>{
        this.setData({
          goodsList:null,
          storeList:res.data
        })
      }
    )
  },

  // 下拉触底事情
  onPullDownRefresh() {
    console.log("hello")
  }
})