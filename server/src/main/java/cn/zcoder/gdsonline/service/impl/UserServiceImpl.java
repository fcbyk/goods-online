package cn.zcoder.gdsonline.service.impl;

import cn.zcoder.gdsonline.entity.Location;
import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.mapper.GoodsMapper;
import cn.zcoder.gdsonline.mapper.StoreMapper;
import cn.zcoder.gdsonline.mapper.UserMapper;
import cn.zcoder.gdsonline.service.UserService;
import cn.zcoder.gdsonline.utils.GeneralPrimaryKey;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import cn.zcoder.gdsonline.vo.LoginInfoVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Autowired
    UserMapper userMapper;

    @Autowired
    GoodsMapper goodsMapper;

    @Autowired
    StoreMapper storeMapper;

    public LoginInfoVO getLoginInfoVM(String openId) {

        // 根据openId，查数据库表
        User user = userMapper.getAllByOpenId(openId);

        // 若未找到用户信息，使用微信openid新增一个用户
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

    public List<GoodsInfoVO> getGoodsInfoList(List<String> list){
        List<GoodsInfoVO> goodsList = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            GoodsInfoVO goodsInfoVO = goodsMapper.getGoodsInfoById(list.get(i));
            goodsInfoVO.setImg(JSON.parseArray(goodsInfoVO.getImg()).get(0).toString());
            goodsInfoVO.setLocation(JSON.parseObject(goodsInfoVO.getLocation().toString(), Location.class));
            goodsList.add(i,goodsInfoVO);
        }

        return goodsList;
    }

    public List<StoreInfoVO> getStoreInfoList(List<String> list){
        List<StoreInfoVO> storeList = new ArrayList<>();
        for (int i = 0; i < list.size(); i++){
            StoreInfoVO storeInfoVO = storeMapper.getStoreInfoById(list.get(i));
            storeInfoVO.setLocation(JSON.parseObject(storeInfoVO.getLocation().toString(), Location.class));
            storeList.add(i,storeInfoVO);
        }

        return storeList;
    }

}
