import { request } from "../../../utils/request"

Page<ClasVM,ClasOP>({

  data: {
    clas:"str",
    storeList:[]
  },

  onLoad(query:Query) {
    let clas = query.clas
    this.setData({clas})
    wx.setNavigationBarTitle({title: query.clas})
    this.updateStoreList(query.clas)
  },

  updateStoreList(clas:string){
    request({
      url:"/store/clas/"+clas,
      method:"GET"
    }).then(
      // 成功的回调
      (res:Result<Array<StoreInfoVM>>)=>{
        this.setData({storeList:res.data})
      }
    )
  }

})