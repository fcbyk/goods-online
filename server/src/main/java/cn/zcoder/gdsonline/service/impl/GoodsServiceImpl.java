package cn.zcoder.gdsonline.service.impl;

import cn.zcoder.gdsonline.entity.Goods;
import cn.zcoder.gdsonline.entity.Location;
import cn.zcoder.gdsonline.mapper.GoodsMapper;
import cn.zcoder.gdsonline.service.GoodsService;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods> implements GoodsService {

    @Autowired
    GoodsMapper goodsMapper;

    public List<Goods> getAllbyUser(String userId){
        QueryWrapper<Goods> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("create_user",userId);
        return goodsMapper.selectList(queryWrapper);
    }

    public List<GoodsInfoVO> search(String key){
        List<GoodsInfoVO> list= goodsMapper.search("%"+key+"%");

        for (int i = 0; i < list.size(); i++){
            GoodsInfoVO goodsInfoVO = list.get(i);
            goodsInfoVO.setImg(JSON.parseArray(goodsInfoVO.getImg()).get(0).toString());
            goodsInfoVO.setLocation(JSON.parseObject(goodsInfoVO.getLocation().toString(), Location.class));
            list.set(i,goodsInfoVO);
        }

        return list;
    }
}
