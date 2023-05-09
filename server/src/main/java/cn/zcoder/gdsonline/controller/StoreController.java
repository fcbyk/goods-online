package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.common.Result;
import cn.zcoder.gdsonline.dto.AddStoreDto;
import cn.zcoder.gdsonline.dto.AlterStoreDto;
import cn.zcoder.gdsonline.entity.Store;
import cn.zcoder.gdsonline.service.StoreService;
import cn.zcoder.gdsonline.utils.GetTime;
import cn.zcoder.gdsonline.vo.StoreDetailVO;
import cn.zcoder.gdsonline.vo.StoreInfoVO;
import com.alibaba.fastjson.JSON;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired
    StoreService storeService;

    // 查询指定分类的店铺
    @GetMapping("/clas/{clas}")
    public Result<List<StoreInfoVO>> getClas(@PathVariable String clas){
        return  Result.success(storeService.getClasList(clas));
    }

    // 查看用户发布的店铺
    @GetMapping("/ofuser")
    public Result<List<Store>> getStoreListOfUser(HttpServletRequest request){
        List<Store> list = storeService.getAllbyUser(request.getHeader("Identity"));
        return Result.success(list);
    }

    // 根据关键词搜索
    @GetMapping("/search/{key}")
    public Result<List<StoreInfoVO>> search(@PathVariable String key){
        return Result.success(storeService.search(key));
    }

    // 查询店铺详情
    @GetMapping("/detail/{sid}")
    public Result<StoreDetailVO> getDetail(@PathVariable String sid){
        return Result.success(storeService.getStoreDetail(sid));
    }

    // 新增店铺
    @PostMapping
    public Result<Boolean> addStore(@RequestBody AddStoreDto addStoreDto, HttpServletRequest request){
        Store store = new Store("init");

        store.setCreateUser(request.getHeader("Identity"));
        store.setName(addStoreDto.getName());
        store.setType(addStoreDto.getType());
        store.setNote(addStoreDto.getNote());
        store.setLocation(JSON.toJSONString(addStoreDto.getLocation()));

        return  Result.success(storeService.save(store));
    }

    // 修改店铺
    @PutMapping
    public Result<Boolean> alterStore(@RequestBody AlterStoreDto alterStoreDto, HttpServletRequest request){

        // 获取原始对象
        Store store = storeService.getById(alterStoreDto.getId());

        // 判断用户身份，鉴权
        if (!store.getCreateUser().equals(request.getHeader("Identity"))){
            return Result.error("没有权限");
        }

        store.setName(alterStoreDto.getName());
        store.setType(alterStoreDto.getType());
        store.setNote(alterStoreDto.getNote());
        store.setLocation(JSON.toJSONString(alterStoreDto.getLocation()));
        store.setUpdateTime(GetTime.now());

        return Result.success(storeService.updateById(store));
    }

    // 删除店铺
    @DeleteMapping("/{sid}")
    public Result<Boolean> deleteStore(@PathVariable String sid,HttpServletRequest request){

        // 判断用户身份，鉴权
        if (!storeService.getById(sid).getCreateUser().equals(request.getHeader("Identity"))){
            return Result.error("没有权限");
        }

        return Result.success(storeService.removeById(sid));
    }
}
