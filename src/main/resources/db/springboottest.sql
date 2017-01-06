-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: springboottest
-- ------------------------------------------------------
-- Server version	5.7.13

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
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `description` varchar(45) COLLATE utf8_spanish_ci DEFAULT '',
  `number_of_hours` int(11) DEFAULT '60',
  `level` varchar(45) COLLATE utf8_spanish_ci DEFAULT 'basic',
  `is_active` tinyint(1) DEFAULT '1',
  `teacher_id` int(11) NOT NULL,
  PRIMARY KEY (`course_id`),
  KEY `teacher_id_idx` (`teacher_id`),
  CONSTRAINT `teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (3,'Algebra','Not funny',100,'advanced',1,1),(4,'AngularJS','flañskdj',100,'basic',1,1),(5,'C#','fasfsd',33,'basic',1,1),(6,'C++','sdfds',56,'intermediate',1,1),(7,'D','flañskdj',100,'basic',1,1),(8,'Elixir','fasfsd',33,'basic',1,1),(9,'Nim','sdfds',56,'intermediate',1,1),(10,'Haskell','flañskdj',100,'basic',1,1),(11,'Haxe','fasfsd',33,'basic',1,1),(12,'Crystal','sdfds',56,'intermediate',1,1),(13,'D','Otra página',100,'basic',1,1),(14,'Elixir','fasfsd',33,'basic',1,1),(15,'Nim','sdfds',56,'intermediate',1,1),(16,'Haskell','flañskdj',100,'basic',1,1),(17,'Haxe','fasfsd',33,'basic',1,1),(18,'Crystal','sdfds',56,'intermediate',1,1),(19,'D','flañskdj',100,'basic',1,1),(20,'Elixir','fasfsd',33,'basic',1,1),(21,'Nim','sdfds',56,'intermediate',1,1),(22,'Haskell','flañskdj',100,'basic',1,1),(23,'Haxe','fasfsd',33,'basic',1,1),(24,'Crystal','sdfds',56,'intermediate',1,1),(25,'D','flañskdj',100,'basic',1,1),(26,'Elixir','fasfsd',33,'basic',1,1),(27,'Nim','sdfds',56,'intermediate',1,1),(28,'Haskell','flañskdj',100,'basic',1,1),(29,'Haxe','fasfsd',33,'basic',1,1),(30,'Crystal','sdfds',56,'intermediate',1,1),(31,'D','flañskdj',100,'basic',1,1),(32,'Elixir','fasfsd',33,'basic',1,1),(33,'Nim','sdfds',56,'intermediate',1,1),(34,'Haskell','flañskdj',100,'basic',1,1),(35,'Haxe','fasfsd',33,'basic',1,1),(36,'Crystal','sdfds',56,'intermediate',1,1),(37,'D','flañskdj',100,'basic',1,1),(38,'Elixir','fasfsd',33,'basic',1,1),(39,'Nim','sdfds',56,'intermediate',1,1),(40,'Haskell','flañskdj',100,'basic',1,1),(41,'Haxe','fasfsd',33,'basic',1,1),(42,'Crystal','sdfds',56,'intermediate',1,1),(43,'D','flañskdj',100,'basic',1,1),(44,'Elixir','fasfsd',33,'basic',1,1),(45,'Nim','sdfds',56,'intermediate',1,1),(46,'Haskell','flañskdj',100,'basic',1,1),(47,'Haxe','fasfsd',33,'basic',1,1),(48,'Crystal','sdfds',56,'intermediate',1,1),(49,'D','flañskdj',100,'basic',1,5),(50,'Elixir','fasfsd',33,'basic',1,5),(51,'Nim','sdfds',56,'intermediate',1,5),(52,'Haskell','flañskdj',100,'basic',1,1),(53,'Haxe','fasfsd',33,'basic',1,1),(54,'Crystal','sdfds',56,'intermediate',1,1),(55,'D','flañskdj',100,'basic',1,1),(56,'Elixir','fasfsd',33,'basic',1,1),(57,'Nim','sdfds',56,'intermediate',1,1),(58,'Haskell','flañskdj',100,'basic',1,1),(59,'Haxe','fasfsd',33,'basic',1,2),(60,'Crystal','sdfds',56,'intermediate',1,2),(61,'D','flañskdj',100,'basic',1,2),(62,'Elixir','fasfsd',33,'basic',1,2),(63,'Nim','sdfds',56,'intermediate',1,2),(64,'Haskell','flañskdj',100,'basic',1,2),(65,'Haxe','fasfsd',33,'basic',1,2),(66,'Crystal','sdfds',56,'intermediate',1,1),(67,'D','flañskdj',100,'basic',1,1),(68,'Elixir','fasfsd',33,'basic',1,1),(69,'Nim','sdfds',56,'intermediate',1,1),(70,'Haskell','flañskdj',100,'basic',1,4),(71,'Haxe','fasfsd',33,'basic',1,4),(72,'Crystal','sdfds',56,'intermediate',1,4),(73,'D','flañskdj',100,'basic',1,1),(74,'Elixir','fasfsd',33,'basic',1,1),(75,'Nim','sdfds',56,'intermediate',1,1),(76,'Haskell','flañskdj',100,'basic',1,1),(77,'COBOL','fasfsd',33,'basic',1,1),(78,'Machine Learning','sdfds',56,'intermediate',1,1),(79,'Brainfuck','flañskdj',100,'basic',1,1),(80,'Objective-C','fasfsd',33,'basic',1,1),(81,'Artificial Vision','sdfds',56,'intermediate',1,1),(82,'Haskell','flañskdj',100,'basic',1,1),(83,'Haxe','fasfsd',33,'basic',1,1),(84,'Crystal','sdfds',56,'intermediate',1,1),(85,'D','flañskdj',100,'basic',1,3),(86,'Erlang','fasfsd',33,'basic',1,3),(87,'Nim','sdfds',56,'intermediate',1,3),(89,'Haxe','fasfsd',33,'basic',1,3),(90,'Crystal','sdfds',56,'intermediate',1,3),(91,'prueba','p',33,'basic',1,3),(92,'prueba','p',33,'basic',1,3),(93,'prueba','p',33,'basic',1,1),(94,'prueba','p',33,'basic',1,1),(95,'prueba','p',33,'basic',1,3),(96,'prueba','p',33,'basic',1,1),(97,'Test Course','Test Course Description',33,'basic',0,1),(98,'Test Course','Test Course Description',33,'basic',0,2);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacher` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `last_name` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'Alfredo','Domínguez'),(2,'Lucas','Nerón'),(3,'María','Campiña'),(4,'Rosa','Elche'),(5,'Lucía','Mérida');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-06 16:17:04
