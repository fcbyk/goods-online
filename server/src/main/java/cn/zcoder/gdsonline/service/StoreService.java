package cn.zcoder.gdsonline.service;

import cn.zcoder.gdsonline.entity.Store;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import cn.zcoder.gdsonline.vo.StoreDetailVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface StoreService extends IService<Store> {

    public List<StoreInfoVO> getClasList(String clas);

    public List<Store> getAllbyUser(String userId);

    public List<StoreInfoVO> search(String key);

    public StoreDetailVO getStoreDetail(String sid);
}
