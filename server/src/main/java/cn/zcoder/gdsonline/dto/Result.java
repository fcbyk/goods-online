package cn.zcoder.gdsonline.dto;

import lombok.Data;

@Data
public class Result<T> {

    private Integer code;

    private T data;

    private String msg;

    public static <T> Result<T> success(T object) {
        Result<T> result = new Result<T>();
        result.code = 2001;
        result.data = object;
        result.msg = "请求成功";
        return result;
    }

    public static <T> Result<T> error(String msg) {
        Result<T> result = new Result<T>();
        result.msg = msg;
        result.code = 2000;
        return result;
    }

    public static <T> Result<T> exception(String msg) {
        Result<T> result = new Result<T>();
        result.msg = msg;
        result.code = 5000;
        return result;
    }
}
