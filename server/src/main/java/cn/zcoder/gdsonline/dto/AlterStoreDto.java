package cn.zcoder.gdsonline.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class AlterStoreDto extends AddStoreDto{

    private String id;
}
