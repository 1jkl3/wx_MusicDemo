-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.4.11-MariaDB - mariadb.org binary distribution
-- 服务器OS:                        Win64
-- HeidiSQL 版本:                  10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for music
CREATE DATABASE IF NOT EXISTS `music` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `music`;

-- Dumping structure for table music.handle_log
CREATE TABLE IF NOT EXISTS `handle_log` (
  `log_id` bigint(20) unsigned zerofill NOT NULL COMMENT '日志id',
  `log_des` varchar(50) NOT NULL COMMENT '日志内容',
  `log_time` timestamp NULL DEFAULT NULL COMMENT '日志时间',
  `user_id` bigint(20) unsigned zerofill NOT NULL COMMENT '用户id',
  PRIMARY KEY (`log_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `log_user_id` FOREIGN KEY (`user_id`) REFERENCES `music_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='操作日志';

-- Data exporting was unselected.

-- Dumping structure for table music.music_author
CREATE TABLE IF NOT EXISTS `music_author` (
  `a_id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '歌手id',
  `a_name` varchar(50) NOT NULL COMMENT '歌手姓名',
  `a_des` text NOT NULL COMMENT '歌手描述',
  `a_photo` varchar(50) NOT NULL COMMENT '歌手头像地址',
  `a_fans` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '粉丝数量',
  `a_follow` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '关注数量',
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='歌手信息';

-- Data exporting was unselected.

-- Dumping structure for table music.music_dvd
CREATE TABLE IF NOT EXISTS `music_dvd` (
  `d_id` bigint(20) NOT NULL COMMENT '专辑id',
  `d_name` varchar(50) NOT NULL COMMENT '专辑名字',
  `d_des` text NOT NULL COMMENT '专辑描述',
  `d_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '发布时间',
  `d_collect` bigint(20) NOT NULL DEFAULT 0 COMMENT '收藏数量',
  PRIMARY KEY (`d_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='专辑';

-- Data exporting was unselected.

-- Dumping structure for table music.music_dynamic
CREATE TABLE IF NOT EXISTS `music_dynamic` (
  `dy_id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '动态id',
  `dy_des` varchar(50) NOT NULL COMMENT '动态内容',
  `dy_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '发布时间',
  `dy_comment` text NOT NULL COMMENT '动态评论',
  `dy_like` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '动态点赞',
  PRIMARY KEY (`dy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='歌手动态';

-- Data exporting was unselected.

-- Dumping structure for table music.music_mv
CREATE TABLE IF NOT EXISTS `music_mv` (
  `m_id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '视频id',
  `m_name` varchar(50) NOT NULL COMMENT '视频名称',
  `m_url` varchar(50) NOT NULL COMMENT '视频路径',
  `m_des` text NOT NULL COMMENT '视频描述',
  `m_like` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '视频点赞',
  `m_collect` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '视频收藏',
  `m_comment` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '视频评论',
  `m_transmit` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '视频转发',
  PRIMARY KEY (`m_id`),
  KEY `m_name` (`m_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='音乐视频';

-- Data exporting was unselected.

-- Dumping structure for table music.music_right
CREATE TABLE IF NOT EXISTS `music_right` (
  `r_id` bigint(20) unsigned zerofill NOT NULL COMMENT '权限id',
  `r_p_id` bigint(20) unsigned zerofill NOT NULL COMMENT '父级权限id',
  `r_name` varchar(50) NOT NULL COMMENT '权限名称',
  `r_des` varchar(50) NOT NULL COMMENT '权限描述',
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='权限表';

-- Data exporting was unselected.

-- Dumping structure for table music.music_role
CREATE TABLE IF NOT EXISTS `music_role` (
  `role_id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `role_name` varchar(50) NOT NULL COMMENT '角色名称',
  `role_p_id` bigint(20) unsigned zerofill NOT NULL COMMENT '父级角色id',
  `role_des` varchar(50) NOT NULL COMMENT '角色描述',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表\r\n';

-- Data exporting was unselected.

-- Dumping structure for table music.music_songs
CREATE TABLE IF NOT EXISTS `music_songs` (
  `s_id` bigint(20) unsigned zerofill NOT NULL COMMENT '歌曲id',
  `s_name` varchar(50) NOT NULL COMMENT '歌曲名称',
  `s_url` varchar(50) NOT NULL COMMENT '歌曲地址',
  `s_des` text DEFAULT NULL COMMENT '歌曲描述',
  `s_img` varbinary(50) NOT NULL COMMENT '歌曲图片',
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='歌曲表';

-- Data exporting was unselected.

-- Dumping structure for table music.music_user
CREATE TABLE IF NOT EXISTS `music_user` (
  `user_id` bigint(12) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_name` varchar(12) NOT NULL COMMENT '用户姓名',
  `user_account` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '用户账号',
  `user_pass` varchar(50) DEFAULT NULL COMMENT '用户密码',
  `user_phone` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '用户手机',
  `user_site` varchar(50) NOT NULL COMMENT '用户地址',
  `user_sign` varchar(50) NOT NULL COMMENT '用户签名',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='音乐系统数据源';

-- Data exporting was unselected.

-- Dumping structure for table music.palylist
CREATE TABLE IF NOT EXISTS `palylist` (
  `p_id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '歌单id',
  `p_des` varchar(50) NOT NULL COMMENT '歌单描述',
  `p_img` varchar(50) NOT NULL COMMENT '歌单图片',
  `p_path` varchar(50) NOT NULL COMMENT '歌单路由',
  `p_num` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '歌单播放量',
  `p_transmit` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '歌单转发量',
  `p_comment` bigint(20) unsigned zerofill NOT NULL DEFAULT 00000000000000000000 COMMENT '歌单评论量',
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='歌单表';

-- Data exporting was unselected.

-- Dumping structure for table music.role_right
CREATE TABLE IF NOT EXISTS `role_right` (
  `rr_id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '角色权限id',
  `r_id` bigint(20) unsigned zerofill NOT NULL COMMENT '权限id',
  `role_id` bigint(20) unsigned zerofill NOT NULL COMMENT '角色id',
  `ur_type` int(100) unsigned zerofill NOT NULL DEFAULT 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 COMMENT '0::可以1:不可以',
  PRIMARY KEY (`rr_id`),
  KEY `rr_r_id` (`r_id`),
  KEY `rr_role_id` (`role_id`),
  KEY `ur_type` (`ur_type`),
  CONSTRAINT `rr_r_id` FOREIGN KEY (`r_id`) REFERENCES `music_right` (`r_id`),
  CONSTRAINT `rr_role_id` FOREIGN KEY (`role_id`) REFERENCES `music_role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色权限表\r\n';

-- Data exporting was unselected.

-- Dumping structure for table music.user_right
CREATE TABLE IF NOT EXISTS `user_right` (
  `ur_id` bigint(20) unsigned zerofill NOT NULL COMMENT '用户权限id',
  `user_id` bigint(20) unsigned zerofill NOT NULL COMMENT '用户id',
  `r_id` bigint(20) unsigned zerofill NOT NULL COMMENT '权限id',
  `ur_type` varchar(50) NOT NULL COMMENT '0:可以1:不可以',
  PRIMARY KEY (`ur_id`),
  KEY `ur_user_id` (`user_id`),
  KEY `ur_r_id` (`r_id`),
  KEY `ur_type` (`ur_type`),
  CONSTRAINT `ur_r_id` FOREIGN KEY (`r_id`) REFERENCES `music_right` (`r_id`),
  CONSTRAINT `ur_user_id` FOREIGN KEY (`user_id`) REFERENCES `music_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户权限';

-- Data exporting was unselected.

-- Dumping structure for table music.user_role
CREATE TABLE IF NOT EXISTS `user_role` (
  `uro_id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '用户角色id',
  `user_id` bigint(20) unsigned zerofill NOT NULL COMMENT '用户id',
  `role_id` bigint(20) unsigned zerofill NOT NULL COMMENT '角色id',
  PRIMARY KEY (`uro_id`),
  KEY `uro_user_id` (`user_id`),
  KEY `uro_role_id` (`role_id`),
  CONSTRAINT `uro_role_id` FOREIGN KEY (`role_id`) REFERENCES `music_role` (`role_id`),
  CONSTRAINT `uro_user_id` FOREIGN KEY (`user_id`) REFERENCES `music_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户角色';

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
