import classification from "../../pagesData/classification"
import {request} from "../../request/index"

Page({

  data: {
    logoFont:'线上逛店',
    searchValue:'',
    homeTop:'home-top',
    indexEmpty:true,
    options:'options',
    option1: [
      { text: '商品', value: 0 },
      { text: '店铺', value: 1 }
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '距离排序', value: 'b' },
      { text: '可行度排序', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
    sort: classification,
    recommend:[]
  },

  onSearch() {
    console.log('搜索' + this.data.searchValue)
    wx.hideTabBar({
      animation: true,
    })
    this.setData({
      options:'optionsPlus',
      homeTop:'.home-top-plus',
      indexEmpty:false,
    })
    setTimeout(()=>{
      this.setData({
        logoFont:'返回',
        homeTop:'.home-top-pluss'
      })
    },700)
  },

  back() {
    wx.showTabBar({
      animation: true,
    })
    this.setData({
      searchValue:'',
      homeTop:'home-top',
      options:'options',
      indexEmpty:true,
      logoFont:'线上逛店',
    })
  },

  onLoad(){
    request({
      url:"/recommend",
      method: 'GET'
    }).then((res:any)=>{
      this.setData({
        recommend:res.data.data
      })
    })
  }
  

})