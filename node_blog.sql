/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50018
Source Host           : localhost:3306
Source Database       : node_blog

Target Server Type    : MYSQL
Target Server Version : 50018
File Encoding         : 65001

Date: 2021-03-16 13:09:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(50) NOT NULL,
  `content` longtext NOT NULL,
  `createtime` bigint(20) NOT NULL,
  `author` varchar(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blogs
-- ----------------------------
INSERT INTO `blogs` VALUES ('2', '标题B', '内容B', '1614409118003', 'lisi');
INSERT INTO `blogs` VALUES ('4', '标题C', '内容C', '1615165803405', 'wanwu');
INSERT INTO `blogs` VALUES ('5', '标题D', '内容D', '1615166429450', 'wangwu');
INSERT INTO `blogs` VALUES ('6', '测试', '测试，测试，测试，测试，测试，测试，测试，测试，测试，测试', '1615167991884', 'zhangsan');
INSERT INTO `blogs` VALUES ('7', '标题A', '内容A', '1615182375353', 'zhangsan');
INSERT INTO `blogs` VALUES ('8', 'haha', 'haha', '1615266629591', 'zhangsan');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `realname` varchar(10) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'zhangsan', '123', '张三');
INSERT INTO `users` VALUES ('2', 'lisi', '123', '李四');
INSERT INTO `users` VALUES ('3', 'zhaoliu', '123', '赵六');
