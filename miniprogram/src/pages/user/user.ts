import { request } from "../../utils/request"

Page({
  data: {
    avatarUrl: "",
    nickname: ""
  },
  onChooseAvatar(e:any) {
    const { avatarUrl } = e.detail 
    this.uploadAvatar(avatarUrl)
  },

  // 修改用户信息,上传服务器
  alterIfon(){
      let temp = wx.getStorageSync("identity")
      temp.avatar = this.data.avatarUrl
      temp.name = this.data.nickname
      request({
        url:"/user",
        method:"PUT",
        data:{
          clas:"info",
          data:temp
        }
      }).then((res:any)=>{
          if(res.data.data == true){
            wx.setStorageSync("identity",temp)
            wx.switchTab({url:'../tab3/tab3'})
          }else{
            wx.showToast({
              icon:"error",
              title:"服务器未知异常"
            })
          }
      })
  },

  // 退出登录
  logout(){
    wx.removeStorage({
      key: 'identity',
      success () {
        wx.clearStorage()
        wx.switchTab({url:'../tab3/tab3'})
      }
    })
  },

  onShow(){
    let user = wx.getStorageSync("identity")
    this.setData({
      avatarUrl: user.avatar,
      nickname: user.name
    })
  },

    // 头像上传
    uploadAvatar(filePath:string){
      return new Promise((resolve, reject)=>{
        wx.uploadFile({
          url:"https://ali.fcbyk.com/file/upload",
          filePath,
          name:"file",
          header:{
            Path:"/avatar"
          },
          success: (res:any) =>{
            if(JSON.parse(res.data).data){
              this.setData({
                avatarUrl:"https://ali.fcbyk.com/file/avatar/" + JSON.parse(res.data).data
              })
            }else{
              wx.showToast({
                icon:"error",
                title:"服务器连接异常"
              })
            }
            resolve(res)
          },
          fail:(err)=>{
            reject(err)
            wx.showToast({
              icon:"error",
              title:"服务器连接异常"
            })
          }
        })
      })
    }
})