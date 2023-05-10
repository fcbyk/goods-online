package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.common.Result;
import cn.zcoder.gdsonline.dto.AddGoodsDto;
import cn.zcoder.gdsonline.dto.AlterGoodsDto;
import cn.zcoder.gdsonline.entity.Goods;
import cn.zcoder.gdsonline.service.GoodsService;
import cn.zcoder.gdsonline.service.UserService;
import cn.zcoder.gdsonline.utils.GetTime;
import cn.zcoder.gdsonline.vo.GoodsInfoVO;
import com.alibaba.fastjson.JSON;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goods")
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @Autowired
    private UserService userService;

    // 查询商品详情
    @GetMapping("/detail/{gid}")
    public Result<Goods> getDetail(@PathVariable String gid){

        Goods goods = goodsService.getById(gid);

        goods.setImglist(JSON.parseArray(goods.getImglist().toString(),String.class));

        return Result.success(goods);
    }

    // 查看用户发布的商品
    @GetMapping("/ofuser")
    public Result<List<Goods>> getGoodsListOfUser(HttpServletRequest request){

        List<Goods> list = goodsService.getAllbyUser(request.getHeader("Identity"));

        for (int i = 0; i < list.size(); i++){
            Goods goods = list.get(i);
            goods.setImglist(JSON.parseArray(goods.getImglist().toString(),String.class));
            list.set(i,goods);
        }

        return Result.success(list);
    }

    // 根据关键词搜索
    @GetMapping("/search/{key}")
    public Result<List<GoodsInfoVO>> search(@PathVariable String key){
        return Result.success(goodsService.search(key));
    }

    // 新增商品
    @PostMapping
    public Result<Boolean> addGoods(@RequestBody AddGoodsDto addGoodsDto, HttpServletRequest request){

        Goods goods = new Goods("init");

        goods.setCreateUser(request.getHeader("Identity"));
        goods.setName(addGoodsDto.getName());
        goods.setImglist(JSON.toJSONString(addGoodsDto.getImglist()));
        goods.setNote(addGoodsDto.getNote());
        goods.setPrice(addGoodsDto.getPrice());
        goods.setStore(addGoodsDto.getStore());
        goods.setTag(userService.getById(request.getHeader("Identity")).getType());

        return Result.success(goodsService.save(goods));
    }

    // 删除商品
    @DeleteMapping("/{gid}")
    public Result<Boolean> deleteGoods(@PathVariable String gid,HttpServletRequest request){

        // 判断用户身份，鉴权
        if (!goodsService.getById(gid).getCreateUser().equals(request.getHeader("Identity"))){
            return Result.error("没有权限");
        }

        return Result.success(goodsService.removeById(gid));
    }

    // 修改商品
    @PutMapping
    public Result<Boolean> alterGoods(@RequestBody AlterGoodsDto alterGoodsDto,HttpServletRequest request){

        // 获取原始对象
        Goods goods = goodsService.getById(alterGoodsDto.getId());

        // 判断用户身份，鉴权
        if (!goods.getCreateUser().equals(request.getHeader("Identity"))){
            return Result.error("没有权限");
        }

        goods.setName(alterGoodsDto.getName());
        goods.setImglist(JSON.toJSONString(alterGoodsDto.getImglist()));
        goods.setNote(alterGoodsDto.getNote());
        goods.setPrice(alterGoodsDto.getPrice());
        goods.setStore(alterGoodsDto.getStore());
        goods.setUpdateTime(GetTime.now());
        goods.setStatus("审核中");

        return Result.success(goodsService.updateById(goods));
    }
}
