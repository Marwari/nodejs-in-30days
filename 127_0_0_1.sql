-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2018 at 02:52 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--
CREATE DATABASE IF NOT EXISTS `hotel` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `hotel`;

-- --------------------------------------------------------

--
-- Table structure for table `foodmenu`
--

CREATE TABLE `foodmenu` (
  `id` int(11) NOT NULL,
  `foodName` varchar(255) NOT NULL,
  `foodType` varchar(255) NOT NULL,
  `priceFull` bigint(255) NOT NULL,
  `priceHalf` bigint(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `foodmenu`
--

INSERT INTO `foodmenu` (`id`, `foodName`, `foodType`, `priceFull`, `priceHalf`) VALUES
(4, 'Ice Cream', 'Dessert Menu', 100, 0),
(2, 'Butter Roti', 'Lunch Menu', 45, 0),
(3, 'Dal Makhani', 'Lunch Menu', 350, 210);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `oid` int(11) NOT NULL,
  `oType` varchar(255) NOT NULL,
  `oList` longtext NOT NULL,
  `oBy` varchar(255) NOT NULL,
  `visitTime` datetime DEFAULT NULL,
  `oTime` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`oid`, `oType`, `oList`, `oBy`, `visitTime`, `oTime`) VALUES
(1, 'Home Delivery', '{"owner":"karn","cvv":"123","cardNumber":"1365456654545454","foodItem":"3","price":"350","qty":"3","foodName":"Dal Makhani","cardExp":"09"}', '4', NULL, '2018-04-27 02:36:08'),
(2, 'Home Delivery', '{"owner":"Karan","cvv":"123","cardNumber":"1231241241241","foodItem":"2","price":"45","qty":"4","foodName":"Butter Roti","cardExp":"07"}', '1', NULL, '2018-04-27 02:49:25');

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` bigint(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`id`, `userName`, `firstName`, `lastName`, `password`, `email`, `contact`, `address`, `role`) VALUES
(1, 'admin', 'Karan', 'Sachar', '$2b$05$rnx8b4uR4AxojWqvjkK64O/mXQe0mu9t90wiX7FU.x1gXcgwpDi52', 'karan@gmail.com', 7986785911, NULL, 1),
(4, 'user', 'user', 'user', '$2b$05$vW4d7T3mNJM6U7ciemL41uhovnsJ44w1WfMLScWbt.i.OvgRHTFXe', 'user@gmail.com', 21241241241, NULL, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `foodmenu`
--
ALTER TABLE `foodmenu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `foodmenu`
--
ALTER TABLE `foodmenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
