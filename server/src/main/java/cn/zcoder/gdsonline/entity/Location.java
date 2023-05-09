package cn.zcoder.gdsonline.entity;

import lombok.Data;

@Data
public class Location {
    /**
     * 地址的详细说明
     */
    private String address;
    /**
     * 纬度，纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
     */
    private double latitude;
    /**
     * 经度，经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
     */
    private double longitude;
    /**
     * 位置名
     */
    private String name;
}

