package cn.zcoder.gdsonline.entity;

import lombok.Data;
import java.util.List;

@Data
public class User {
    /**
     * 头像url
     */
    private String avatar;
    /**
     * 想去买的商品
     */
    private String goList;
    /**
     * 用户id
     */
    private String id;
    /**
     * 昵称
     */
    private String name;
    /**
     * 微信id
     */
    private String openId;
    /**
     * 密码
     */
    private String password;
    /**
     * 收藏的商品
     */
    private String starGoods;
    /**
     * 订阅的店铺
     */
    private String starStores;
    /**
     * 用户类别，1为普通用户，0为管理员
     */
    private String type;

    public User(){ }

    public User(String options){
        if (options == "init"){
            this.avatar = "../../assets/img/user.jpg";
            this.starGoods = "[]";
            this.starStores = "[]";
            this.goList = "[]";
        }
    }

    public User(String id, String name, String avatar) {
        this.avatar = avatar;
        this.id = id;
        this.name = name;
    }
}