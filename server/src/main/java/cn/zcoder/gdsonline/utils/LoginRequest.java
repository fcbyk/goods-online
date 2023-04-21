package cn.zcoder.gdsonline.utils;

import cn.zcoder.gdsonline.dto.Code2Session;
import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Component
public class LoginRequest {

    @Value("${wxmini.appid}")
    private String appid;

    @Value("${wxmini.secret}")
    private String secret;

    public Code2Session getCode2Session(String jsCode){
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid={appid}&secret={secret}&js_code={jsCode}&grant_type=authorization_code";
        Map<String, String> uriVariables = new HashMap<>();
        uriVariables.put("appid", appid);
        uriVariables.put("secret", secret);
        uriVariables.put("jsCode", jsCode);
        return JSON.parseObject(restTemplate.getForObject(url, String.class, uriVariables), Code2Session.class);
    }

}
