package cn.zcoder.gdsonline.entity;

import lombok.Data;

@Data
public class User {

    private String avatar;
    private Object goList;
    private String id;
    private String name;
    private String openId;
    private Object starGoods;
    private Object starStores;
    private String type;

    public User(){ }

    public User(String options){
        if (options == "init"){
            this.avatar = "https://ali.fcbyk.com:8080/img/gl/user.jpg";
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