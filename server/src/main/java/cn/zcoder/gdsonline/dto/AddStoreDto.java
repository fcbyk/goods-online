package cn.zcoder.gdsonline.dto;

import cn.zcoder.gdsonline.entity.Location;
import lombok.Data;

@Data
public class AddStoreDto {
    private Location location;
    private String name;
    private String note;
    private String type;
}
