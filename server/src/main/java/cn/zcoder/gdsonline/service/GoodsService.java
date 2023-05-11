package cn.zcoder.gdsonline.service;

import cn.zcoder.gdsonline.entity.Goods;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface GoodsService extends IService<Goods> {

    public List<Goods> getAllbyUser(String userId);

    public List<GoodsInfoVO> search(String key);

    public List<GoodsInfoVO> searchasc(String key);
}
