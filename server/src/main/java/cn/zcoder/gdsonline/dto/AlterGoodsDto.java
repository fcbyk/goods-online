package cn.zcoder.gdsonline.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class AlterGoodsDto extends AddGoodsDto{
    /**
     * 商品id
     */
    private String id;
}
