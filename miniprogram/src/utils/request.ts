interface RequestOption{
    /** 请求接口 */
    url: string
    /** 请求方法 */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    /** 请求的参数 */
    data?: any
}

export const request = (obj:RequestOption) => {
  // 定义一个公共的url
  const baseUrl = "https://mock.apifox.cn/m1/2496703-0-default"
  return new Promise((resolve, reject) => {
      // 开启loading
      wx.showLoading({
          title: '努力加载中...',
      })
      wx.request({
          ...obj,
          header: {
            'Identity': wx.getStorageSync("identity").userid
          },
          url: baseUrl + obj.url,
          success: (res) => {
              resolve(res)
              // 关闭loading
              wx.hideLoading()
          },
          fail: (err) => {
              reject(err)
              // 关闭loading
              wx.hideLoading()
          }
      })
  })
}