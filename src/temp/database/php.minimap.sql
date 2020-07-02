SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `binhan` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `binhan`;
 
CREATE TABLE `category` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
INSERT INTO `category` (`ID`, `Name`, `More`) VALUES
 
CREATE TABLE `customer` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
INSERT INTO `customer` (`ID`, `Name`, `Age`, `Address`, `Gender`, `PhoneNumber`, `Email`) VALUES
 
CREATE TABLE `employer` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
INSERT INTO `employer` (`ID`, `Name`, `Age`, `Address`, `Gender`, `PhoneNumber`, `Email`) VALUES

ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);
 
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `employer`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `customer`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
 
ALTER TABLE `employer`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

CREATE DATABASE IF NOT EXISTS `flyticket` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `flyticket`;
 
CREATE TABLE `customer` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `employer` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `flycompany` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `login` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `schedule` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `ticket` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `ticket_customer` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
ALTER TABLE `customer`
  ADD PRIMARY KEY (`ID`);
 
ALTER TABLE `employer`
  ADD PRIMARY KEY (`ID`);
 
ALTER TABLE `flycompany`
  ADD PRIMARY KEY (`ID`);
 
ALTER TABLE `login`
  ADD PRIMARY KEY (`ID`);
 
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`ID`);
 
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `ticket_customer`
  ADD PRIMARY KEY (`ID`);
 
ALTER TABLE `customer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `employer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `flycompany`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `login`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `schedule`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `ticket`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `ticket_customer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;
 
CREATE TABLE `pma__bookmark` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';
 
CREATE TABLE `pma__central_columns` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';
 
CREATE TABLE `pma__column_info` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';
 
CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';
 
INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{\"relation_lines\":\"true\",\"snap_to_grid\":\"off\",\"angular_direct\":\"direct\"}');
 
CREATE TABLE `pma__export_templates` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';
 
CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';
 
INSERT INTO `pma__favorite` (`username`, `tables`) VALUES
('root', '[{\"db\":\"qlbanhang\",\"table\":\"customer\"},{\"db\":\"qlbanhang\",\"table\":\"product\"},{\"db\":\"qlbanhang\",\"table\":\"age\"},{\"db\":\"qlbanhang\",\"table\":\"employer\"}]');
 
CREATE TABLE `pma__history` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';
 
CREATE TABLE `pma__navigationhiding` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';
 
CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';
 
INSERT INTO `pma__pdf_pages` (`db_name`, `page_nr`, `page_descr`) VALUES
('qlbanhang', 1, 'QLBanHangDatabase');
 
CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';
 
INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"flyticket\",\"table\":\"customer\"},{\"db\":\"flyticket\",\"table\":\"employer\"},{\"db\":\"flyticket\",\"table\":\"flycompany\"},{\"db\":\"flyticket\",\"table\":\"ticket_customer\"},{\"db\":\"flyticket\",\"table\":\"ticket\"},{\"db\":\"flyticket\",\"table\":\"schedule\"},{\"db\":\"flyticket\",\"table\":\"login\"},{\"db\":\"binhan\",\"table\":\"category\"},{\"db\":\"binhan\",\"table\":\"employer\"},{\"db\":\"binhan\",\"table\":\"customer\"}]');
 
CREATE TABLE `pma__relation` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';
 
CREATE TABLE `pma__savedsearches` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';
 
CREATE TABLE `pma__table_coords` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';
 
INSERT INTO `pma__table_coords` (`db_name`, `table_name`, `pdf_page_number`, `x`, `y`) VALUES
('qlbanhang', 'age', 1, 604, 243),
('qlbanhang', 'customer', 1, 186, 243);
 
CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';
 
INSERT INTO `pma__table_info` (`db_name`, `table_name`, `display_field`) VALUES
('qlbanhang', 'customer', 'Name');
 
CREATE TABLE `pma__table_uiprefs` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';
 
CREATE TABLE `pma__tracking` (
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';
 
CREATE TABLE `pma__userconfig` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';
 
INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2020-06-19 13:12:42', '{\"Console\\/Mode\":\"collapse\",\"NavigationWidth\":154}');
 
CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';
 
CREATE TABLE `pma__users` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';
 
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);
 
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);
 
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);
 
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);
 
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);
 
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);
 
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);
 
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);
 
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);
 
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);
 
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);
 
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);
 
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);
 
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);
 
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);
 
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);
 
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);
 
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);
 
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);
 
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
 
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

CREATE DATABASE IF NOT EXISTS `qlbanhang` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `qlbanhang`;
 
CREATE TABLE `age` (
  `Id` int(11) NOT NULL,
  `Age` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
INSERT INTO `age` (`Id`, `Age`) VALUES
 
CREATE TABLE `category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
INSERT INTO `category` (`Id`, `Name`) VALUES
 
CREATE TABLE `customer` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `employer` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE `product` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
INSERT INTO `product` (`Id`, `Name`, `DateIn`, `BarCode`, `ImageURL`, `Category`, `Total`) VALUES
 
CREATE TABLE `user` (
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
ALTER TABLE `age`
  ADD PRIMARY KEY (`Id`);
 
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`);
 
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Age` (`Age`);
 
ALTER TABLE `employer`
  ADD PRIMARY KEY (`Id`);
 
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`);
 
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);
 
ALTER TABLE `age`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
 
ALTER TABLE `category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
 
ALTER TABLE `customer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `employer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
 
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
 
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`Age`) REFERENCES `age` (`Id`);

CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;