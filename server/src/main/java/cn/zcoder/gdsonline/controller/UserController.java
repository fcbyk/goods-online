package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.dto.Code2SessionDto;
import cn.zcoder.gdsonline.common.Result;
import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.mapper.UserMapper;
import cn.zcoder.gdsonline.service.UserService;
import cn.zcoder.gdsonline.utils.LoginRequestUtil;
import cn.zcoder.gdsonline.vo.LoginInfoVO;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private LoginRequestUtil loginRequestUtil;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserService userService;

    // 微信授权登录
    @PostMapping
    public Result<LoginInfoVO> wxLogin(@RequestBody Map<String,String> reqBody){

        // 根据jscode请求openId,如未取得openid，返回错误信息
        Code2SessionDto code2Session = loginRequestUtil.getCode2Session(reqBody.get("jscode"));
        String openId = code2Session.getOpenid();
        if (openId == null){
            return Result.error(code2Session.getErrmsg());
        }

        // 取得openId，查数据库表
        // 若未找到用户信息，使用微信openid新增一个用户
        // 返回用户登录信息
        return Result.success(userService.getLoginInfoVM(openId));
    }

    // 用户修改信息
    @PutMapping("/info")
    public Result<Object> updateInfo(@RequestBody Map<String,String> userInfo, HttpServletRequest request){

        // 请求头拿用户id
        String id = request.getHeader("Identity");
        if(id == null){
            return Result.error("未登录");
        }

        // 根据用户id修改表，修改成功后返回ture
        User user = new User(id,userInfo.get("name"),userInfo.get("avatar"));
        if(userService.updateById(user)){
            return Result.success(true);
        }

        //修改失败，返回错误信息
        return Result.error("未知异常");
    }
}
