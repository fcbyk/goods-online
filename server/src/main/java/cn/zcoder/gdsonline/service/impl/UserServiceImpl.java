package cn.zcoder.gdsonline.service.impl;

import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.mapper.UserMapper;
import cn.zcoder.gdsonline.service.UserService;
import cn.zcoder.gdsonline.utils.GeneralPrimaryKey;
import cn.zcoder.gdsonline.vo.LoginInfoVO;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Autowired
    UserMapper userMapper;

    public LoginInfoVO getLoginInfoVM(String openId) {
        User user = userMapper.getAllByOpenId(openId);

        if (user==null){
            User newUser = new User("init");

            String primaryKey = GeneralPrimaryKey.getPrimaryKey();
            newUser.setId("U" + primaryKey);
            newUser.setName("微信用户"+ primaryKey.substring(primaryKey.length()-3));
            newUser.setOpenId(openId);
            userMapper.insert(newUser);
            user = newUser;
        }

        return new LoginInfoVO(user.getAvatar(),user.getId(),user.getName());
    }

}
