package cn.zcoder.gdsonline.service;

import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.vo.LoginInfoVO;
import com.baomidou.mybatisplus.extension.service.IService;

public interface UserService extends IService<User> {

    public LoginInfoVO getLoginInfoVM(String openId);
}
