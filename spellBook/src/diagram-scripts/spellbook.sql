-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: spellbook
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table ` payments`
--

DROP TABLE IF EXISTS ` payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE ` payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table ` payments`
--

LOCK TABLES ` payments` WRITE;
/*!40000 ALTER TABLE ` payments` DISABLE KEYS */;
/*!40000 ALTER TABLE ` payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_images`
--

DROP TABLE IF EXISTS `book_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  PRIMARY KEY (`id`)
=======
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5f5526cd-489d-4e0e-b4d7-5adb44d1520a` (`book_id`),
  CONSTRAINT `FK_5f5526cd-489d-4e0e-b4d7-5adb44d1520a` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_images`
--

LOCK TABLES `book_images` WRITE;
/*!40000 ALTER TABLE `book_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `book_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `books_author` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
<<<<<<< HEAD
<<<<<<< HEAD
  `description` text DEFAULT NULL,
=======
<<<<<<< HEAD
  `description` varchar(255) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
=======
  `description` text DEFAULT NULL,
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
  `description` text DEFAULT NULL,
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
  `recommendedAge_id` int(11) NOT NULL,
  `month_selection` binary(1) DEFAULT NULL,
  `publisher` varchar(100) DEFAULT NULL,
  `lenguage` varchar(100) NOT NULL,
  `publication_year` date NOT NULL,
  `pages` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_badd7c11-0e39-4679-97fc-7722f26d7f08` (`recommendedAge_id`),
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  KEY `FK_d1a4d6e0-4179-4344-a22e-6df11ea53f6d` (`image_id`),
=======
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
  KEY `FK_05fa88a5-7108-479f-a100-2f3f72d9a9a8` (`stock`),
  KEY `FK_ab01af3e-f402-4878-b690-4573c7e0d3fb` (`books_author`),
  CONSTRAINT `FK_05fa88a5-7108-479f-a100-2f3f72d9a9a8` FOREIGN KEY (`stock`) REFERENCES `stocks` (`id`),
  CONSTRAINT `FK_ab01af3e-f402-4878-b690-4573c7e0d3fb` FOREIGN KEY (`books_author`) REFERENCES `books_authors` (`id`),
<<<<<<< HEAD
<<<<<<< HEAD
  CONSTRAINT `FK_badd7c11-0e39-4679-97fc-7722f26d7f08` FOREIGN KEY (`recommendedAge_id`) REFERENCES `recommended_ages` (`id`)
=======
<<<<<<< HEAD
  CONSTRAINT `FK_badd7c11-0e39-4679-97fc-7722f26d7f08` FOREIGN KEY (`recommendedAge_id`) REFERENCES `recommendedages` (`id`),
  CONSTRAINT `FK_d1a4d6e0-4179-4344-a22e-6df11ea53f6d` FOREIGN KEY (`image_id`) REFERENCES `book_images` (`id`)
=======
  CONSTRAINT `FK_badd7c11-0e39-4679-97fc-7722f26d7f08` FOREIGN KEY (`recommendedAge_id`) REFERENCES `recommended_ages` (`id`)
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
  CONSTRAINT `FK_badd7c11-0e39-4679-97fc-7722f26d7f08` FOREIGN KEY (`recommendedAge_id`) REFERENCES `recommended_ages` (`id`)
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_authors`
--

DROP TABLE IF EXISTS `books_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books_authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_books` int(11) NOT NULL,
  `id_authors` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c84bfb11-3d68-43c1-befd-ae3e3e103081` (`id_books`),
  KEY `FK_90c44a04-a77c-4603-91f5-a47906fc8367` (`id_authors`),
  CONSTRAINT `FK_90c44a04-a77c-4603-91f5-a47906fc8367` FOREIGN KEY (`id_authors`) REFERENCES `authors` (`id`),
  CONSTRAINT `FK_c84bfb11-3d68-43c1-befd-ae3e3e103081` FOREIGN KEY (`id_books`) REFERENCES `books` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_authors`
--

LOCK TABLES `books_authors` WRITE;
/*!40000 ALTER TABLE `books_authors` DISABLE KEYS */;
/*!40000 ALTER TABLE `books_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  ` purchaseDetail_id` int(11) NOT NULL,
  ` payment_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_52217f2b-2482-4c93-beb7-bb7ddfeec942` (`user_id`),
  KEY `FK_0762ef1c-dde7-479f-8ec7-06a274d748a8` (` purchaseDetail_id`),
  KEY `FK_af7ed11e-1b81-4001-b522-9c7f1802467c` (` payment_id`),
<<<<<<< HEAD
<<<<<<< HEAD
  CONSTRAINT `FK_0762ef1c-dde7-479f-8ec7-06a274d748a8` FOREIGN KEY (` purchaseDetail_id`) REFERENCES `purchase_details` (`id`),
=======
<<<<<<< HEAD
  CONSTRAINT `FK_0762ef1c-dde7-479f-8ec7-06a274d748a8` FOREIGN KEY (` purchaseDetail_id`) REFERENCES ` purchasedetails` (`id`),
=======
  CONSTRAINT `FK_0762ef1c-dde7-479f-8ec7-06a274d748a8` FOREIGN KEY (` purchaseDetail_id`) REFERENCES `purchase_details` (`id`),
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
  CONSTRAINT `FK_0762ef1c-dde7-479f-8ec7-06a274d748a8` FOREIGN KEY (` purchaseDetail_id`) REFERENCES `purchase_details` (`id`),
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
  CONSTRAINT `FK_52217f2b-2482-4c93-beb7-bb7ddfeec942` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_af7ed11e-1b81-4001-b522-9c7f1802467c` FOREIGN KEY (` payment_id`) REFERENCES ` payments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_8dcc04c3-4d07-4468-9447-1cb077bfeb60` (`book_id`),
  KEY `FK_88f34fee-98a4-4e5b-be6f-3dd51dde1d4a` (`user_id`),
  CONSTRAINT `FK_88f34fee-98a4-4e5b-be6f-3dd51dde1d4a` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_8dcc04c3-4d07-4468-9447-1cb077bfeb60` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
<<<<<<< HEAD
<<<<<<< HEAD
-- Table structure for table `purchase_details`
=======
<<<<<<< HEAD
-- Table structure for table `recommendedages`
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
--

DROP TABLE IF EXISTS `purchase_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD
=======
  `nambre` varchar(50) NOT NULL,
=======
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
-- Table structure for table `purchase_details`
--

DROP TABLE IF EXISTS `purchase_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
  `book_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `carts_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_de088f6d-9857-40ac-ab9d-67abb4776735` (`book_id`),
  KEY `FK_4302cccd-c791-4268-8f6b-cb085a2e046b` (`carts_id`),
  CONSTRAINT `FK_4302cccd-c791-4268-8f6b-cb085a2e046b` FOREIGN KEY (`carts_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `FK_de088f6d-9857-40ac-ab9d-67abb4776735` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_details`
--

LOCK TABLES `purchase_details` WRITE;
/*!40000 ALTER TABLE `purchase_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recommended_ages`
--

DROP TABLE IF EXISTS `recommended_ages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recommended_ages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
<<<<<<< HEAD
<<<<<<< HEAD
-- Dumping data for table `recommended_ages`
--

LOCK TABLES `recommended_ages` WRITE;
/*!40000 ALTER TABLE `recommended_ages` DISABLE KEYS */;
/*!40000 ALTER TABLE `recommended_ages` ENABLE KEYS */;
=======
<<<<<<< HEAD
-- Dumping data for table `recommendedages`
--

LOCK TABLES `recommendedages` WRITE;
/*!40000 ALTER TABLE `recommendedages` DISABLE KEYS */;
/*!40000 ALTER TABLE `recommendedages` ENABLE KEYS */;
=======
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
-- Dumping data for table `recommended_ages`
--

LOCK TABLES `recommended_ages` WRITE;
/*!40000 ALTER TABLE `recommended_ages` DISABLE KEYS */;
/*!40000 ALTER TABLE `recommended_ages` ENABLE KEYS */;
<<<<<<< HEAD
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_4ce66111-0c12-4628-add9-77ae9fb561aa` (`book_id`),
  CONSTRAINT `FK_4ce66111-0c12-4628-add9-77ae9fb561aa` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `country` varchar(50) DEFAULT NULL,
<<<<<<< HEAD
<<<<<<< HEAD
  `password` varchar(70) NOT NULL,
=======
<<<<<<< HEAD
  `password` varchar(70) DEFAULT NULL,
=======
  `password` varchar(70) NOT NULL,
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
  `password` varchar(70) NOT NULL,
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
  `birthday` date DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `rol` varchar(10) NOT NULL,
  `shopping_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0494c7ba-8ecf-49ee-966e-12c96c1070fd` (`shopping_id`),
  CONSTRAINT `FK_0494c7ba-8ecf-49ee-966e-12c96c1070fd` FOREIGN KEY (`shopping_id`) REFERENCES `favorite` (`id`)
<<<<<<< HEAD
<<<<<<< HEAD
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
=======
<<<<<<< HEAD
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
=======
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
INSERT INTO `users` VALUES (1,'raul','escobar','raul@mail.com','Argentina','123456',NULL,NULL,'admin',NULL);
=======
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'spellbook'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

<<<<<<< HEAD
<<<<<<< HEAD
-- Dump completed on 2021-09-27 11:34:29
=======
<<<<<<< HEAD
-- Dump completed on 2021-09-24 12:06:58
=======
-- Dump completed on 2021-09-27 11:34:29
>>>>>>> 931bf34 (cambio de nombres en models)
>>>>>>> 32c3ae0231bd836eaaa0764b5108614867d861d2
=======
-- Dump completed on 2021-09-27 11:34:29
>>>>>>> 6e0440c2572026a49641db19d39b05555422b3f2
