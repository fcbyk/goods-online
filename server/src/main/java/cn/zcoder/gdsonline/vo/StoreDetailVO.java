package cn.zcoder.gdsonline.vo;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class StoreDetailVO{
    private String boss;
    private String createTime;
    private String createUser;
    private long followers;
    private long goodsNumber;
    private String id;
    private Object location;
    private String name;
    private String note;
    private String status;
    private String type;
    private String updateTime;
    private List<Map<String, Object>> goodsList;
}
