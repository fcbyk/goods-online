package cn.zcoder.gdsonline.service;

import cn.zcoder.gdsonline.entity.User;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import cn.zcoder.gdsonline.vo.LoginInfoVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface UserService extends IService<User> {

    public LoginInfoVO getLoginInfoVM(String openId);

    public List<GoodsInfoVO> getGoodsInfoList(List<String> list);

    public List<StoreInfoVO> getStoreInfoList(List<String> list);
}
