package cn.zcoder.gdsonline;

import cn.zcoder.gdsonline.entity.Goods;
import cn.zcoder.gdsonline.entity.Location;
import cn.zcoder.gdsonline.entity.Store;
import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.mapper.GoodsMapper;
import cn.zcoder.gdsonline.mapper.StoreMapper;
import cn.zcoder.gdsonline.mapper.UserMapper;
import cn.zcoder.gdsonline.service.StoreService;
import cn.zcoder.gdsonline.utils.GeneralPrimaryKey;
import cn.zcoder.gdsonline.utils.GetTime;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
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

    @Autowired
    StoreService storeService;


    @Test
    void contextLoads() throws IOException {
        System.out.println(storeService.getStoreDetail("s0001"));
    }


}
