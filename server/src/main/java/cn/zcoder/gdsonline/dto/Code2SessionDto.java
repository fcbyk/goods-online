package cn.zcoder.gdsonline.dto;

import lombok.Data;

@Data
public class Code2SessionDto {
    private String session_key;
    private String errmsg;
    private String openid;
    private String unionid;
    private int errcode;
}
