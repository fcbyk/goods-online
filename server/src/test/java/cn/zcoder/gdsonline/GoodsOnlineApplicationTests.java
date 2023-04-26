package cn.zcoder.gdsonline;

import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.mapper.UserMapper;
import com.alibaba.fastjson.JSON;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.util.*;


@SpringBootTest
class GoodsOnlineApplicationTests {

    @Autowired
    UserMapper userMapper;

    @Test
    void contextLoads() throws IOException {
    }
}
