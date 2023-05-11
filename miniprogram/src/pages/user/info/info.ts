import { request, uploadFile } from "../../../utils/request"

Page<InfoVM,InfoOP>({
  data: {
    avatarUrl: "",
    nickname: "",
    deleteAvartar:""
  },

  onChooseAvatar(e:any) {
    const { avatarUrl } = e.detail
    uploadFile(avatarUrl).then((res)=>{
      const str = this.data.avatarUrl;
      const index = str.lastIndexOf("/");
      const result = str.substring(index + 1);
      this.setData({
        deleteAvartar:result,
        avatarUrl:"https://ali.fcbyk.com/file/"+res.data
      })
    })
  },

  // 修改用户信息,上传服务器
  alterIfon(){
      let temp = wx.getStorageSync("identity")
      temp.avatar = this.data.avatarUrl
      temp.name = this.data.nickname
      request({
        url:"/user/info",
        method:"PUT",
        data:{
          name:temp.name,
          avatar:temp.avatar
        }
      }).then((res:any)=>{
          if(res.data == true){
            wx.setStorageSync("identity",temp)
            request({
              url:"/file/"+this.data.deleteAvartar,
              method:"DELETE"
            })
            wx.switchTab({url:'../index/index'})
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
      wx.clearStorage()
      wx.switchTab({url:'../index/index'})
  },

  onShow(){
    let user = wx.getStorageSync("identity")
    this.setData({
      avatarUrl: user.avatar,
      nickname: user.name
    })
  }
})