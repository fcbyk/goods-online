CREATE DATABASE goods_online;
USE goods_online;


-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE IF NOT EXISTS `user` (
 `id` VARCHAR(255) NOT NULL COMMENT '用户id',
 `type` ENUM('admin', 'user') NOT NULL DEFAULT 'user' COMMENT '用户类别，user为普通用户，admin为管理员',
 `open_id` VARCHAR(255) COMMENT '微信id',
 `password` VARCHAR(255) COMMENT '密码',
 `avatar` VARCHAR(255) NOT NULL DEFAULT '../../assets/img/user.jpg' COMMENT '头像url',
 `name` VARCHAR(255) NOT NULL DEFAULT '新用户' COMMENT '昵称',
 `star_goods` JSON COMMENT '收藏的商品',
 `star_stores` JSON COMMENT '订阅的店铺',
 `go_list` JSON COMMENT '想去买的商品',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户';


-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user`(id) VALUES ("31312") 


-- ----------------------------
-- Table structure for goods
-- ----------------------------
CREATE TABLE IF NOT EXISTS `user` (
 `id` VARCHAR(255) NOT NULL COMMENT '商品id',
 `name` VARCHAR(255) NOT NULL COMMENT '商品名称',
 `mian_img` VARCHAR(255) NOT NULL COMMENT '商品主图',
 `slide_pics` JSON NOT NULL COMMENT '轮播图数组',
 `store_id` VARCHAR(255) NOT NULL COMMENT '商店id',
 `price` DOUBLE PRECISION NOT NULL COMMENT '价格',
 `create_user` VARCHAR(255) NOT NULL COMMENT '发布者id',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '最后的修改时间',
 `status` ENUM('1', '2', '3', '4', '5') NOT NULL COMMENT '商品状态，1已发布，2审核中， 3草稿， 4审核不通过， 5标记删除',
 `note` VARCHAR(255) NOT NULL COMMENT '发布者备注',
 `info_tag` ENUM('1', '2', '3') NOT NULL COMMENT '信息标签，1为开发者发布，2为店主发布，3为普通用户发布',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品';



-- ----------------------------
-- Records of goods
-- ----------------------------


-- ----------------------------
-- Table structure for store
-- ----------------------------
CREATE TABLE IF NOT EXISTS `user` (
 `id` VARCHAR(255) NOT NULL COMMENT '商品id',
 `name` VARCHAR(255) NOT NULL COMMENT '商品名称',
 `mian_img` VARCHAR(255) NOT NULL COMMENT '商品主图',
 `slide_pics` JSON NOT NULL COMMENT '轮播图数组',
 `store_id` VARCHAR(255) NOT NULL COMMENT '商店id',
 `price` DOUBLE PRECISION NOT NULL COMMENT '价格',
 `create_user` VARCHAR(255) NOT NULL COMMENT '发布者id',
 `create_time` datetime NOT NULL COMMENT '创建时间',
 `update_time` datetime NOT NULL COMMENT '最后的修改时间',
 `status` ENUM('1', '2', '3', '4', '5') NOT NULL COMMENT '商品状态，1已发布，2审核中， 3草稿， 4审核不通过， 5标记删除',
 `note` VARCHAR(255) NOT NULL COMMENT '发布者备注',
 `info_tag` ENUM('1', '2', '3') NOT NULL COMMENT '信息标签，1为开发者发布，2为店主发布，3为普通用户发布',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='店铺';


-- ----------------------------
-- Records of goods
-- ----------------------------