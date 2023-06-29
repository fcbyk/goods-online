Page<any,any>({

  data: {
    isLogin:false,
    golist:[{
      id:null,
      location:null
    }],
    sum:"0"
  },

  onShow() {
    let golist = wx.getStorageSync("golist")
    if(golist){
      this.setSum()
    }
    this.setData({
      isLogin:wx.getStorageSync("identity"),
      golist,
    })
  },

  setSum() {
    let golist = wx.getStorageSync("golist");
    let sum = 0;
    golist.forEach((element:any) => {
      sum += element.price;
    });
    let sumStr = sum.toFixed(2); // 保留两位小数
    this.setData({ sum:sumStr });
  },
  
  goto(){
    wx.switchTab({
      url:"../../home/index/index"
    })
  },

  swipeCell(event:any) {
    let index = event.currentTarget.dataset.index
    let golist = this.data.golist
    if(event.detail == "right"){
          golist.splice(index,1)
          wx.setStorageSync('golist', golist)
          this.setSum()
          this.setData({golist})
    }
    
    if(event.detail == "left"){
        let location = this.data.golist[event.currentTarget.dataset.index].location
        wx.openLocation({
          address: location.address,
          latitude: location.latitude,
          longitude: location.longitude,
          name: location.name,
        })
    }
  },

  noGoing(){
    wx.showToast({
      icon:"error",
      title:"暂不支持...."
    })
  }
})