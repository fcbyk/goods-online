package cn.zcoder.gdsonline.vo;

import lombok.Data;

@Data
public class GoodsInfoVO {
    private String id;
    private String name;
    private String img;
    private Object location;
    private double price;
    private String storeId;
    private String storeName;
    private String tag;
}