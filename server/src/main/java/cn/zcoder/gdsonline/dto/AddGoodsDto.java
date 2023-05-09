package cn.zcoder.gdsonline.dto;

import lombok.Data;

import java.util.List;

@Data
public class AddGoodsDto {
    /**
     * 轮播图数组
     */
    private List<String> imglist;
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
     * 商店id
     */
    private String store;
}
