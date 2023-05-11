// 请求的服务器
const FCBYK:string = "https://ali.fcbyk.com"
// const APIFOX:string = "https://mock.apifox.cn/m1/2496703-0-default"
// const LOCALHOST:string = "http://localhost"

// 错误提示
const errMsg = (msg:string):void=>{
  wx.showToast({icon:"error", title:msg})
}

// 二次封装请求方法
export const request:Request = (requestOption:RequestOption) => {

  const baseUrl = FCBYK

  return new Promise((resolve, reject) => {
      wx.showLoading({title: '努力加载中...'})
      wx.request({

          // 请求配置
          ...requestOption,
          header: {'Identity': wx.getStorageSync("identity").id},
          url: baseUrl + requestOption.url,
          timeout:10000,

          // 成功的回调
          success: (res) => {
              resolve(res.data)
              wx.hideLoading()

              // 404 提示
              if(res.statusCode == 404) errMsg("404没找到")
          },

          // 失败的回调
          fail: (err) => {
              reject(err)
              wx.hideLoading()
              errMsg("服务器异常")
          }
      })
  })
}

export const uploadFile:UploadFile = (filePath:string) => {
  return new Promise((resolve, reject)=>{

    wx.uploadFile({
      url:"https://ali.fcbyk.com/file",
      filePath,
      name:"file",
      success: (res:any) =>{
        resolve(res)
        if(res.statusCode == 404) errMsg("404没找到")
      },
      
      fail:(err)=>{
        reject(err)
        errMsg("服务器异常")
      }
    })
  })
}