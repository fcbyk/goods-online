package cn.zcoder.gdsonline.entity;

import cn.zcoder.gdsonline.utils.GeneralPrimaryKey;
import cn.zcoder.gdsonline.utils.GetTime;
import lombok.Data;

@Data
public class Goods {
    /**
     * 创建时间
     */
    private String createTime;
    /**
     * 发布者id
     */
    private String createUser;
    /**
     * 商品id
     */
    private String id;
    /**
     * 轮播图数组
     */
    private Object imglist;
    /**
     * 商品名称
     */
    private String name;
    /**
     * 发布者备注
     */
    private String note;
    /**
     * 价格
     */
    private double price;
    /**
     * 商品状态，1已发布，2审核中， 3草稿， 4审核不通过， 5标记删除
     */
    private String status;
    /**
     * 商店id
     */
    private String store;
    /**
     * 信息标签，1为开发者发布，2为店主发布，3为普通用户发布
     */
    private String tag;
    /**
     * 最后的修改时间
     */
    private String updateTime;

    public Goods(String options){
        if (options == "init"){
            this.createTime = GetTime.now();
            this.updateTime = GetTime.now();
            this.tag = "普通用户";
            this.status = "审核中";
            this.id = "G"+ GeneralPrimaryKey.getPrimaryKey();
        }
    }

    public Goods(){}
}
