package cn.zcoder.gdsonline;

import cn.zcoder.gdsonline.entity.Goods;
import cn.zcoder.gdsonline.entity.Location;
import cn.zcoder.gdsonline.entity.Store;
import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.mapper.GoodsMapper;
import cn.zcoder.gdsonline.mapper.StoreMapper;
import cn.zcoder.gdsonline.mapper.UserMapper;
import cn.zcoder.gdsonline.utils.GeneralPrimaryKey;
import cn.zcoder.gdsonline.utils.GetTime;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


@SpringBootTest
class GoodsOnlineApplicationTests {

    @Autowired
    UserMapper userMapper;

    @Autowired
    GoodsMapper goodsMapper;

    @Autowired
    StoreMapper storeMapper;


    @Test
    void contextLoads() throws IOException {
        User user = userMapper.selectById("wx12420235004");
        List<String> starGoods = JSON.parseArray(user.getStarGoods().toString(),String.class);
        System.out.println(starGoods);
        starGoods.add("hello");
        user.setStarGoods(starGoods);
        System.out.println(user);
    }

    @Test
    void insertTest(){

        Store store = new Store();

        store.setId("s10086");
        store.setCreateTime(GetTime.now());
        store.setGoodsNumber(0);
        store.setFollowers(0);
        store.setLocation("{}");
        store.setName("黑超");
        store.setUpdateTime(GetTime.now());
        store.setType("测试");
        store.setCreateUser("hello123");

        storeMapper.insert(store);


    }

}
