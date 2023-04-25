package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.dto.Code2SessionDto;
import cn.zcoder.gdsonline.dto.Result;
import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.mapper.UserMapper;
import cn.zcoder.gdsonline.utils.LoginRequestUtil;
import com.alibaba.fastjson.JSON;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private LoginRequestUtil loginRequestUtil;

    @Autowired
    private UserMapper userMapper;

    // 微信授权登录
    @GetMapping("/wxlogin/{jscode}")
    public Result<Object> wxLogin(@PathVariable String jscode){

        // 根据jscode请求openId,如未取得openid，返回错误信息
        Code2SessionDto code2Session = loginRequestUtil.getCode2Session(jscode);
        String openId = code2Session.getOpenid();
        if (openId == null){
            return Result.error(code2Session.getErrmsg());
        }

        // 取得openId，查数据库表，若未找到用户信息，使用微信openid新增一个用户
        User user = userMapper.getAllByOpenId(openId);
        if (user==null){
            User newUser = new User("init");
            LocalDate nowDate = LocalDate.now();
            int random = (int) (Math.random() * 10000);
            newUser.setId("wx" + nowDate.getDayOfYear() + nowDate.getYear() + random);
            newUser.setName("微信用户"+ random);
            newUser.setOpenId(openId);
            userMapper.insert(newUser);
            user = newUser;
        }

        // 返回用户信息
        Map<String,Object> userInfo = new HashMap<>();
        userInfo.put("id",user.getId());
        userInfo.put("name",user.getName());
        userInfo.put("avatar",user.getAvatar());
        return Result.success(userInfo);
    }

    // 用户修改信息
    @PutMapping
    public Result<Object> updateInfo(@RequestBody Map<String,String> userInfo, HttpServletRequest request){

        // 请求头拿用户id
        String id = request.getHeader("Identity");
        if(id == null){
            return Result.error("未登录");
        }

        // 根据用户id修改表，修改成功后返回ture
        User user = new User(id,userInfo.get("name"),userInfo.get("avatar"));
        if(userMapper.updateById(user)==1){
            return Result.success(true);
        }

        //修改失败，返回错误信息
        return Result.error("未知异常");
    }
}
