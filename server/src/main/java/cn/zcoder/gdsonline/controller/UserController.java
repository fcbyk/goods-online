package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.dto.AlterUserListDto;
import cn.zcoder.gdsonline.dto.Code2SessionDto;
import cn.zcoder.gdsonline.common.Result;
import cn.zcoder.gdsonline.entity.Store;
import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.service.StoreService;
import cn.zcoder.gdsonline.service.UserService;
import cn.zcoder.gdsonline.utils.LoginRequestUtil;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import cn.zcoder.gdsonline.vo.LoginInfoVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
import com.alibaba.fastjson.JSON;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private LoginRequestUtil loginRequestUtil;

    @Autowired
    private UserService userService;

    @Autowired
    private StoreService storeService;

    // 微信授权登录
    @PostMapping
    public Result<LoginInfoVO> wxLogin(@RequestBody Map<String,String> reqBody){

        // 根据jscode请求openId,如未取得openid，返回错误信息
        Code2SessionDto code2Session = loginRequestUtil.getCode2Session(reqBody.get("jscode"));
        String openId = code2Session.getOpenid();
        if (openId == null){
            return Result.error(code2Session.getErrmsg());
        }

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

    // 查询用户待去买集合
    @GetMapping("/golist")
    public Result<List<GoodsInfoVO>> getGoList(HttpServletRequest request){

        String id = request.getHeader("Identity");
        List<String> list = JSON.parseArray(userService.getById(id).getGoList().toString(), String.class);

        return Result.success(userService.getGoodsInfoList(list));
    }

    // 查询用户商品收藏
    @GetMapping("/star-goods")
    public Result<List<GoodsInfoVO>> getStarGoodsList(HttpServletRequest request){

        String id = request.getHeader("Identity");
        List<String> list = JSON.parseArray(userService.getById(id).getStarGoods().toString(), String.class);

        return Result.success(userService.getGoodsInfoList(list));
    }

    // 查询用户店铺订阅
    @GetMapping("/star-stores")
    public Result<List<StoreInfoVO>> getStarStoreList(HttpServletRequest request){

        String id = request.getHeader("Identity");
        List<String> list = JSON.parseArray(userService.getById(id).getStarStores().toString(), String.class);

        return Result.success(userService.getStoreInfoList(list));
    }

    // 修改用户集合
    @PutMapping("/list")
    public Result<Boolean> alterUserList(@RequestBody AlterUserListDto alterUserListDto,HttpServletRequest request){

        String id = request.getHeader("Identity");
        User user = userService.getById(id);
        List<String> list;
        Set<String> set = new HashSet<>();

        switch (alterUserListDto.getClas()) {
            case "golist" -> {
                list = JSON.parseArray(user.getGoList().toString(), String.class);
                set.addAll(list);
            }
            case "star-goods" -> {
                list = JSON.parseArray(user.getStarGoods().toString(), String.class);
                set.addAll(list);
            }
            case "star-store" -> {
                list = JSON.parseArray(user.getStarStores().toString(), String.class);
                set.addAll(list);
            }
        }

        switch (alterUserListDto.getMethod()) {
            case "add" -> set.add(alterUserListDto.getValue());
            case "remove" -> set.remove(alterUserListDto.getValue());
        }

        if(alterUserListDto.getClas().equals("star-store")){
            Store store = storeService.getById(alterUserListDto.getValue());
            if(alterUserListDto.getMethod().equals("add")){
                store.setFollowers(store.getFollowers()+1);
            }
            if(alterUserListDto.getMethod().equals("remove")){
                store.setFollowers(store.getFollowers()-1);
            }
            storeService.updateById(store);
        }

        switch (alterUserListDto.getClas()){
            case "golist" -> user.setGoList(JSON.toJSONString(set));
            case "star-goods" -> user.setStarGoods(JSON.toJSONString(set));
            case "star-store" -> user.setStarStores(JSON.toJSONString(set));
        }

        return Result.success(userService.updateById(user));
    }
}
