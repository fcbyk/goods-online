package cn.zcoder.gdsonline.mapper;

import cn.zcoder.gdsonline.entity.Store;
import cn.zcoder.gdsonline.vo.StoreDetailVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface StoreMapper extends BaseMapper<Store> {

    @Select("select * from store where type = #{clas} and status = '已发布'")
    List<StoreInfoVO> getClasList(String clas);

    @Select("select * from store where name like #{key} and status = '已发布'")
    List<StoreInfoVO> search(String key);

    @Select("select * from store where id = #{sid}")
    StoreDetailVO getStoreDetail(String sid);

    @Select("select * from store where id = #{sid}")
    StoreInfoVO getStoreInfoById(String sid);
}
