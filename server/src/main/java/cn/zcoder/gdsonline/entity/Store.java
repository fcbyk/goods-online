package cn.zcoder.gdsonline.entity;

import cn.zcoder.gdsonline.utils.GeneralPrimaryKey;
import cn.zcoder.gdsonline.utils.GetTime;
import lombok.Data;

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

    public Store(){}

    public Store(String options){
        if (options == "init"){
            this.id = "S"+ GeneralPrimaryKey.getPrimaryKey();
            this.createTime = GetTime.now();
            this.updateTime = GetTime.now();
            this.followers = 0;
            this.goodsNumber = 0;
            this.status = "审核中";
        }
    }
}