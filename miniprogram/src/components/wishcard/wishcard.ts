// components/wishcard/wishcard.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    goods:JSON.parse(wx.getStorageSync("wish")),
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose(event:any) {
      if(event.detail == "right"){
        let wish = this.data.goods
        wish.splice(event.currentTarget.dataset.index,1)
        wx.setStorageSync('wish', wish)
        this.setData({
          goods:wish
        })
      }
    },
  }
})
