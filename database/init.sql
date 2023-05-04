create database goods_online;
use goods_online;

-- ----------------------------
-- 用户表
-- ----------------------------
create table if not exists `user` (
 `id` varchar(255) not null,
 `type` varchar(255) not null default '普通用户',
 `open_id` varchar(255),
 `avatar` varchar(255) not null default 'https://ali.fcbyk.com:8080/img/gl/user.jpg',
 `name` varchar(255) not null default '新用户',
 `star_goods` json,
 `star_stores` json,
 `go_list` json,
 primary key (`id`)
);

-- ----------------------------
-- 商品表
-- ----------------------------
create table if not exists `goods` (
 `id` varchar(255) not null,
 `name` varchar(255) not null,
 `imglist` json not null,
 `store` varchar(255) not null,
 `price` double precision not null,
 `create_user` varchar(255) not null,
 `create_time` datetime not null,
 `update_time` datetime not null,
 `status` varchar(255) not null default '审核中',
 `note` varchar(255) not null,
 `tag` varchar(255) not null default '普通用户',
 primary key (`id`)
);
-- ----------------------------
-- 商品表初始数据
-- ----------------------------


-- ----------------------------
-- 店铺表
-- ----------------------------
create table if not exists `store` (
 `id` varchar(255) not null,
 `name` varchar(255) not null,
 `type` varchar(255) not null,
 `location` json not null,
 `goods_number` integer not null default 0,
 `followers` integer not null default 0,
 `boss` varchar(255),
 `create_user` varchar(255) not null,
 `create_time` datetime not null,
 `update_time` datetime not null,
 `status` varchar(255) not null,
 primary key (`id`)
);

-- ----------------------------
-- 店铺表初始数据
-- ----------------------------