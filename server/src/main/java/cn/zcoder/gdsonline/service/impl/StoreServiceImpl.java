package cn.zcoder.gdsonline.service.impl;

import cn.zcoder.gdsonline.entity.Location;
import cn.zcoder.gdsonline.entity.Store;
import cn.zcoder.gdsonline.mapper.GoodsMapper;
import cn.zcoder.gdsonline.mapper.StoreMapper;
import cn.zcoder.gdsonline.service.StoreService;
import cn.zcoder.gdsonline.vo.StoreDetailVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class StoreServiceImpl extends ServiceImpl<StoreMapper, Store> implements StoreService {

    @Autowired
    StoreMapper storeMapper;

    @Autowired
    GoodsMapper goodsMapper;

    public List<StoreInfoVO> getClasList(String clas){
        List<StoreInfoVO> clasList = storeMapper.getClasList(clas);

        return getStoreInfoVOS(clasList);
    }

    public List<Store> getAllbyUser(String userId){
        QueryWrapper<Store> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("create_user",userId);
        return storeMapper.selectList(queryWrapper);
    }

    public List<StoreInfoVO> search(String key){
        List<StoreInfoVO> list = storeMapper.search("%" + key + "%");

        return getStoreInfoVOS(list);
    }

    private List<StoreInfoVO> getStoreInfoVOS(List<StoreInfoVO> list) {
        for (int i = 0; i < list.size(); i++) {
            StoreInfoVO storeInfoVO = list.get(i);
            storeInfoVO.setLocation(JSON.parseObject(storeInfoVO.getLocation().toString(), Location.class));
            list.set(i,storeInfoVO);
        }

        return list;
    }

    public StoreDetailVO getStoreDetail(String sid){
        StoreDetailVO storeDetail = storeMapper.getStoreDetail(sid);
        storeDetail.setLocation(JSON.parseObject(storeDetail.getLocation().toString(), Location.class));

        List<Map<String, Object>> allGoodsOfStore = goodsMapper.getAllGoodsOfStore(sid);
        for (int i = 0; i < allGoodsOfStore.size(); i++) {
            Map<String, Object> goods = allGoodsOfStore.get(i);
            goods.put("img",JSON.parseArray(goods.get("img").toString(),String.class).get(0));
            allGoodsOfStore.set(i,goods);
        }

        storeDetail.setGoodsList(allGoodsOfStore);
        return storeDetail;
    }
}
