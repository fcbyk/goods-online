package cn.zcoder.gdsonline;

import cn.zcoder.gdsonline.mapper.GoodsMapper;
import cn.zcoder.gdsonline.mapper.StoreMapper;
import cn.zcoder.gdsonline.mapper.UserMapper;
import cn.zcoder.gdsonline.service.StoreService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;


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

    }


}
