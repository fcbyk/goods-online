package cn.zcoder.gdsonline.mapper;

import cn.zcoder.gdsonline.entity.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper extends BaseMapper<User>{

    @Select("select id,name,avatar from user where open_id = #{openId}")
    User getAllByOpenId(String openId);

}
