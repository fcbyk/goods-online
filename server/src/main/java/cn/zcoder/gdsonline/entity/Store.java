package cn.zcoder.gdsonline.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;

@Data
public class Store {
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
}