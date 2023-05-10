package cn.zcoder.gdsonline.mapper;

import cn.zcoder.gdsonline.entity.Goods;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface GoodsMapper extends BaseMapper<Goods> {

    @Select("select goods.id, goods.name, goods.imglist as img, goods.price,goods.tag," +
            "store.id as storeId,store.name as storeName,store.location as location " +
            "from goods INNER JOIN store ON goods.store = store.id where goods.name like #{key} and goods.status = '已发布'")
    public List<GoodsInfoVO> search(String key);

    @Select("select id,name,imglist as img,price,tag from goods where store = #{sid} and goods.status = '已发布'")
    public List<Map<String,Object>> getAllGoodsOfStore(String sid);

    @Select("select goods.id, goods.name, goods.imglist as img, goods.price,goods.tag," +
            "store.id as storeId,store.name as storeName,store.location as location " +
            "from goods INNER JOIN store ON goods.store = store.id where goods.id = #{gid}")
    public GoodsInfoVO getGoodsInfoById(String gid);
}
