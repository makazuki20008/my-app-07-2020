-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2020 at 03:15 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31
 
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
 
 
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
 
--
-- Database: `binhan`
--
CREATE DATABASE IF NOT EXISTS `binhan` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `binhan`;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `category`
--
 
CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `More` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Dumping data for table `category`
--
 
INSERT INTO `category` (`ID`, `Name`, `More`) VALUES
(1, 'Gia dụng', NULL),
(2, 'Văn phòng', NULL),
(3, 'Kỹ thuật', NULL),
(4, 'Điện tử', NULL),
(5, 'Thể thao', NULL);
 
-- --------------------------------------------------------
 
--
-- Table structure for table `customer`
--
 
CREATE TABLE `customer` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Age` datetime DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Gender` bit(1) DEFAULT NULL,
  `PhoneNumber` char(11) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Dumping data for table `customer`
--
 
INSERT INTO `customer` (`ID`, `Name`, `Age`, `Address`, `Gender`, `PhoneNumber`, `Email`) VALUES
(1, 'Đặng Võ Bảo Trân', NULL, NULL, NULL, NULL, NULL),
(2, 'Ngô Văn Thái', NULL, NULL, NULL, NULL, NULL),
(3, 'Lê Nguyễn Quốc Khôi', NULL, NULL, NULL, NULL, NULL),
(4, 'Đặng Nhật Nam', NULL, NULL, NULL, NULL, NULL),
(5, 'Thái Văn Vũ', NULL, NULL, NULL, NULL, NULL);
 
-- --------------------------------------------------------
 
--
-- Table structure for table `employer`
--
 
CREATE TABLE `employer` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Age` datetime DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Gender` bit(1) DEFAULT NULL,
  `PhoneNumber` char(11) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Dumping data for table `employer`
--
 
INSERT INTO `employer` (`ID`, `Name`, `Age`, `Address`, `Gender`, `PhoneNumber`, `Email`) VALUES
(1, 'Hoàng Thiên Phúc', NULL, NULL, NULL, NULL, NULL),
(2, 'Ngô Trung Hiếu', NULL, NULL, NULL, NULL, NULL),
(3, 'Nguyễn Thanh Thiên Trang', NULL, NULL, NULL, NULL, NULL),
(4, 'Lê Việt Hoàng Vũ', NULL, NULL, NULL, NULL, NULL),
(5, 'Trần Lê Bảo Ngân', NULL, NULL, NULL, NULL, NULL);
 
--
-- Indexes for dumped tables
--
 
--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`ID`);
 
--
-- AUTO_INCREMENT for dumped tables
--
 
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
 
--
-- AUTO_INCREMENT for table `employer`
--
ALTER TABLE `employer`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Database: `flyticket`
--
CREATE DATABASE IF NOT EXISTS `flyticket` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `flyticket`;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `customer`
--
 
CREATE TABLE `customer` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Gender` bit(1) DEFAULT NULL,
  `Age` datetime DEFAULT NULL,
  `PhoneNumber` char(11) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `employer`
--
 
CREATE TABLE `employer` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Age` datetime DEFAULT NULL,
  `Gender` bit(1) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `PersonalID` char(10) DEFAULT NULL,
  `PhoneNumber` char(11) DEFAULT NULL,
  `Country` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `flycompany`
--
 
CREATE TABLE `flycompany` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `PhoneNumber` char(11) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `login`
--
 
CREATE TABLE `login` (
  `ID` int(11) NOT NULL,
  `UserName` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `FullName` varchar(100) DEFAULT NULL,
  `Role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `schedule`
--
 
CREATE TABLE `schedule` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `BeginTime` datetime DEFAULT NULL,
  `EndTime` datetime DEFAULT NULL,
  `PlaneCompany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `ticket`
--
 
CREATE TABLE `ticket` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Schedule` int(11) NOT NULL,
  `Price` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `ticket_customer`
--
 
CREATE TABLE `ticket_customer` (
  `ID` int(11) NOT NULL,
  `Customer` int(11) NOT NULL,
  `Ticket` int(11) NOT NULL,
  `Time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Indexes for dumped tables
--
 
--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `flycompany`
--
ALTER TABLE `flycompany`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ID`);
 
--
-- Indexes for table `ticket_customer`
--
ALTER TABLE `ticket_customer`
  ADD PRIMARY KEY (`ID`);
 
--
-- AUTO_INCREMENT for dumped tables
--
 
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `employer`
--
ALTER TABLE `employer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `flycompany`
--
ALTER TABLE `flycompany`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `ticket_customer`
--
ALTER TABLE `ticket_customer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__bookmark`
--
 
CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__central_columns`
--
 
CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__column_info`
--
 
CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__designer_settings`
--
 
CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';
 
--
-- Dumping data for table `pma__designer_settings`
--
 
INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{\"relation_lines\":\"true\",\"snap_to_grid\":\"off\",\"angular_direct\":\"direct\"}');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__export_templates`
--
 
CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__favorite`
--
 
CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';
 
--
-- Dumping data for table `pma__favorite`
--
 
INSERT INTO `pma__favorite` (`username`, `tables`) VALUES
('root', '[{\"db\":\"qlbanhang\",\"table\":\"customer\"},{\"db\":\"qlbanhang\",\"table\":\"product\"},{\"db\":\"qlbanhang\",\"table\":\"age\"},{\"db\":\"qlbanhang\",\"table\":\"employer\"}]');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__history`
--
 
CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__navigationhiding`
--
 
CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__pdf_pages`
--
 
CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';
 
--
-- Dumping data for table `pma__pdf_pages`
--
 
INSERT INTO `pma__pdf_pages` (`db_name`, `page_nr`, `page_descr`) VALUES
('qlbanhang', 1, 'QLBanHangDatabase');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__recent`
--
 
CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';
 
--
-- Dumping data for table `pma__recent`
--
 
INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"flyticket\",\"table\":\"customer\"},{\"db\":\"flyticket\",\"table\":\"employer\"},{\"db\":\"flyticket\",\"table\":\"flycompany\"},{\"db\":\"flyticket\",\"table\":\"ticket_customer\"},{\"db\":\"flyticket\",\"table\":\"ticket\"},{\"db\":\"flyticket\",\"table\":\"schedule\"},{\"db\":\"flyticket\",\"table\":\"login\"},{\"db\":\"binhan\",\"table\":\"category\"},{\"db\":\"binhan\",\"table\":\"employer\"},{\"db\":\"binhan\",\"table\":\"customer\"}]');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__relation`
--
 
CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__savedsearches`
--
 
CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__table_coords`
--
 
CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';
 
--
-- Dumping data for table `pma__table_coords`
--
 
INSERT INTO `pma__table_coords` (`db_name`, `table_name`, `pdf_page_number`, `x`, `y`) VALUES
('qlbanhang', 'age', 1, 604, 243),
('qlbanhang', 'customer', 1, 186, 243);
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__table_info`
--
 
CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';
 
--
-- Dumping data for table `pma__table_info`
--
 
INSERT INTO `pma__table_info` (`db_name`, `table_name`, `display_field`) VALUES
('qlbanhang', 'customer', 'Name');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__table_uiprefs`
--
 
CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__tracking`
--
 
CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__userconfig`
--
 
CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';
 
--
-- Dumping data for table `pma__userconfig`
--
 
INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2020-06-19 13:12:42', '{\"Console\\/Mode\":\"collapse\",\"NavigationWidth\":154}');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__usergroups`
--
 
CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';
 
-- --------------------------------------------------------
 
--
-- Table structure for table `pma__users`
--
 
CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';
 
--
-- Indexes for dumped tables
--
 
--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);
 
--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);
 
--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);
 
--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);
 
--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);
 
--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);
 
--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);
 
--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);
 
--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);
 
--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);
 
--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);
 
--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);
 
--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);
 
--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);
 
--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);
 
--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);
 
--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);
 
--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);
 
--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);
 
--
-- AUTO_INCREMENT for dumped tables
--
 
--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
 
--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `qlbanhang`
--
CREATE DATABASE IF NOT EXISTS `qlbanhang` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `qlbanhang`;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `age`
--
 
CREATE TABLE `age` (
  `Id` int(11) NOT NULL,
  `Age` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Dumping data for table `age`
--
 
INSERT INTO `age` (`Id`, `Age`) VALUES
(1, 'Trẻ em'),
(2, 'Thiếu niên'),
(3, 'Thanh niên'),
(4, 'Trung niên'),
(5, 'Người già');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `category`
--
 
CREATE TABLE `category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Dumping data for table `category`
--
 
INSERT INTO `category` (`Id`, `Name`) VALUES
(1, 'Đồ nội thất'),
(2, 'Mỹ phẩm'),
(3, 'Đồ gia dụng'),
(4, 'Dược phẩm chức năng'),
(5, 'Văn phòng'),
(6, 'Quần áo'),
(7, 'Giày'),
(8, 'Sách nói điện tử');
 
-- --------------------------------------------------------
 
--
-- Table structure for table `customer`
--
 
CREATE TABLE `customer` (
  `Id` int(11) NOT NULL,
  `Name` varchar(90) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `PersonalNumber` char(10) DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Nationality` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `AvatarURL` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `PhoneNumber` char(11) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Address` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Facebook` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Email` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `HighSchool` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Job` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `Hobbies` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Comment` text CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `employer`
--
 
CREATE TABLE `employer` (
  `Id` int(11) NOT NULL,
  `FullName` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Address` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `PhoneNumber` char(11) DEFAULT NULL,
  `PersonalNumber` char(9) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `AvatarURL` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Nationality` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Email` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Comment` text CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- --------------------------------------------------------
 
--
-- Table structure for table `product`
--
 
CREATE TABLE `product` (
  `Id` int(11) NOT NULL,
  `Name` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `DateIn` date DEFAULT NULL,
  `BarCode` varchar(150) DEFAULT NULL,
  `ImageURL` varchar(150) NOT NULL,
  `Category` int(11) NOT NULL,
  `Total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Dumping data for table `product`
--
 
INSERT INTO `product` (`Id`, `Name`, `DateIn`, `BarCode`, `ImageURL`, `Category`, `Total`) VALUES
(1, 'iPhone 5', '0000-00-00', NULL, './images/product/iphone5.jpg', 0, 0),
(2, 'iPhone 5', '0000-00-00', NULL, './images/product/iphone5.jpg', 0, 0),
(3, 'iPhone 5S', NULL, NULL, './images/product/iphone5s.jpg', 0, 0),
(4, 'iPhone 4', NULL, NULL, './images/product/iphone4.jpg', 0, 0),
(5, 'iPhone 3S', NULL, NULL, './images/product/iphone3s.jpg', 0, 0),
(6, 'iPhone XS Max', NULL, NULL, './images/product/iphonexsmax.jpg', 0, 0),
(7, 'iPhone XS', NULL, NULL, './images/product/iphonexs.jpg', 0, 0);
 
-- --------------------------------------------------------
 
--
-- Table structure for table `user`
--
 
CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `UserName` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Password` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `FullName` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `Email` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `PhoneNumber` char(11) NOT NULL,
  `Role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
--
-- Indexes for dumped tables
--
 
--
-- Indexes for table `age`
--
ALTER TABLE `age`
  ADD PRIMARY KEY (`Id`);
 
--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`);
 
--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Age` (`Age`);
 
--
-- Indexes for table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`Id`);
 
--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`);
 
--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);
 
--
-- AUTO_INCREMENT for dumped tables
--
 
--
-- AUTO_INCREMENT for table `age`
--
ALTER TABLE `age`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
 
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
 
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `employer`
--
ALTER TABLE `employer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
 
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
 
--
-- Constraints for dumped tables
--
 
--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`Age`) REFERENCES `age` (`Id`);
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;
 
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;