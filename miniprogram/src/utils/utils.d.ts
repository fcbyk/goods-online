// 请求配置
interface RequestOption{
  url: string // 请求接口
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' //请求方法
  data?: any // 请求的参数
}

// 封装wx.request()方法
type Request = (requestOption:RequestOption)=>Promise<any>

// 封装wx.uploadFile()方法
type UploadFile = (filePath:string,where:"/avatar"|"/goods") => Promise<any>