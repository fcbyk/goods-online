interface InfoVM{
  avatarUrl:string
  nickname:string
}

interface InfoOP{

  // 获取图片临时地址
  onChooseAvatar(e:any):void

  // 退出登录
  logout():void

  // 初始化头像昵称
  onShow():void

  // 修改用户信息,上传服务器
  alterIfon():void
}