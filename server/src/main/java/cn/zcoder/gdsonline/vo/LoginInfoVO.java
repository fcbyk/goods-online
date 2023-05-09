package cn.zcoder.gdsonline.vo;

import lombok.Data;

@Data
public class LoginInfoVO {
    private String avatar;
    private String id;
    private String name;

    public LoginInfoVO(String avatar, String id, String name) {
        this.avatar = avatar;
        this.id = id;
        this.name = name;
    }
}
