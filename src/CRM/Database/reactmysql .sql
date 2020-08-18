-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2020 at 05:34 PM
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
-- Database: `reactmysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(120) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` tinyint(1) NOT NULL,
  `phonenumber` char(13) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `dob`, `gender`, `phonenumber`) VALUES
(1, 'Bình An', '1993-06-07', 1, ''),
(2, 'Bích Phương', '1997-12-21', 0, ''),
(3, 'Quốc Hưng', '1997-12-01', 1, ''),
(4, 'Phạm Ân', '2000-03-08', 1, ''),
(5, 'Như Lan', '1992-12-22', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstname`, `lastname`, `age`, `createdAt`, `updatedAt`) VALUES
(1, 'An', 'Le', 27, '2020-02-02 00:00:00', '2020-02-02 00:00:00'),
(2, 'Nga', 'Le', 27, '2020-02-02 00:00:00', '2020-02-02 00:00:00'),
(3, 'Ngoc', 'Nguyen', 27, '2020-02-02 00:00:00', '2020-02-02 00:00:00'),
(4, 'Lan', 'Tran', 27, '2020-02-02 00:00:00', '2020-02-02 00:00:00'),
(5, 'Hung', 'Ly', 27, '2020-02-02 00:00:00', '2020-02-02 00:00:00'),
(6, 'Cuong', 'Le', 27, '2020-02-02 00:00:00', '2020-02-02 00:00:00'),
(7, 'Dai', 'Nguyen', 27, '2020-02-02 00:00:00', '2020-02-02 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `image` varchar(120) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `name` varchar(150) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `category` varchar(100) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `price` char(10) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `weight` varchar(120) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `datein` date DEFAULT NULL,
  `peopletype` varchar(120) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `location` varchar(150) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `description` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `category`, `price`, `weight`, `datein`, `peopletype`, `location`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'https://media3.scdn.vn/img3/2019/8_2/UwS70N_simg_de2fe0_500x500_maxb.jpg', 'Giày B56', 'Giầy', '150000', '2.5 kg', '2020-08-02', 'An', 'STD127', 'Text text text...', NULL, NULL),
(2, 'https://bizweb.dktcdn.net/thumb/grande/100/057/672/products/icon-57abe4a5-081d-4f1e-bfbb-13ae4897ecbe.jpg', 'Giày B74', 'Giầy', '175000', '1.2 kg', '2020-08-02', 'An', 'STD227', 'Text text text...', NULL, NULL),
(3, 'https://giaythainguyen.com/wp-content/uploads/2019/03/53519683_1633983600067236_5684074584131764224_o.jpg', 'Giày K2t', 'Giầy', '150000', '1.1 kg', '2020-08-02', 'An', 'STD127', 'Text text text...', NULL, NULL),
(4, 'https://sitanbinh.com/wp-content/uploads/2019/03/%C3%81o-thun-tr%C6%A1n-6.1-1.jpg', 'Áo Sọc', 'Áo', '150000', '0.7 kg', '2020-08-02', 'Lan', 'STD253', 'Text text text...', NULL, NULL),
(5, 'https://media3.scdn.vn/img3/2019/11_17/WzlMYe_simg_de2fe0_500x500_maxb.jpg', 'Áo Skidop', 'Áo', '577000', '0.43 kg', '2020-08-02', 'Nam', 'STD532', 'Text text text...', NULL, NULL),
(6, 'https://product.hstatic.net/1000230670/product/05943_-_xdt_-_1_ad648f66a6484ad7845230fd71a6575e_master.jpg', 'Quần Jean B48', 'Quần', '1270000', '3.2 kg', '2020-08-02', 'Nam', 'SBK111', 'Text text text...', NULL, NULL),
(7, 'https://product.hstatic.net/1000096196/product/g1296__11__1da2ac596e7943ee8606373dc9e34a2e_master.jpg', 'Kính thời trang', 'Kính', '320000', '0.1 kg', '2020-08-02', 'An', 'CTD127', 'Text text text...', NULL, NULL),
(8, 'https://namsport.vn/public/files/upload/default/images/san-pham/adidas/prophere-blue-namsport.jpg', 'Giày B56', 'Giầy', '150000', '2.5 kg', '2020-08-02', 'An', 'STD127', 'Text text text...', NULL, NULL),
(9, 'https://bactieuphuong.com/wp-content/uploads/2018/12/lac-tay-tre-em-ltte14.jpg', 'Lắc tay E36', 'Lắc tay', '150000', '2.5 kg', '2020-08-02', 'Phương', 'STD127', 'Text text text...', NULL, NULL),
(10, 'https://salt.tikicdn.com/ts/tmp/40/c4/22/9ec2ab07765ecf153388f9d9730e3b3c.jpg', 'Giày B56', 'Giầy', '150000', '2.5 kg', '2020-08-02', 'An', 'STD127', 'Text text text...', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
