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
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'J. K Rowling'),(2,'George R. R. Martin'),(3,'J. R. R. Tolkien'),(4,'Andrzej Sapkowsk'),(5,'Jane Austen');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
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
  `author_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `recommended_age_id` int(11) NOT NULL,
  `publisher` varchar(50) NOT NULL,
  `language` varchar(20) NOT NULL,
  `publication_year` int(11) NOT NULL,
  `pages` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `books_FK` (`recommended_age_id`),
  KEY `books_FK_1` (`author_id`),
  CONSTRAINT `books_FK` FOREIGN KEY (`recommended_age_id`) REFERENCES `recommended_ages` (`id`),
  CONSTRAINT `books_FK_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Fuego y sangre   ',1,2,1200,'George R. R. Martin narra la fascinante historia de los Targaryen, la dinastía que reinó en Poniente trescientos años antes del inicio de \'Canción de hielo y fuego\', la saga que inspiró la serie de HBO: Juego de tronos. Siglos antes de que tuvieran lugar los acontecimientos que se relatan en \'Canción de hielo y fuego\', la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón. Aquí tenemos el primero de los dos volúmenes en el que el autor de Juego de tronos nos cuenta, con todo lujo de detalles, la historia de tan fascinante familia: empezando por Aegon I Targaryen, creador del icónico Trono de Hierro, y seguido por el resto de las generaciones de Targaryens que lucharon con fiereza por conservar el poder, y el trono, hasta la llegada de la guerra civil que casi acaba con ellos. ¿Qué pasó realmente durante la Danzade dragones? ¿Por qué era tan peligroso acercarse a Valyria después de la Maldición? ¿Cómo era Poniente cuando los dragones dominaban los cielos? Estas, y otras muchas, son las preguntas a las que responde esta monumental crónica, narrada por un culto maestre de la Ciudadela, que anticipa el ya conocido universo de George R.R. Martin. Fuego y Sangre brindará a los lectores la oportunidad de tener otra visión de la fascinante historia de Poniente. Esta obra, magníficamente ilustrada con 85 láminas inéditas de Doug Wheatley, se convertirá, sin duda, en una lectura ineludible para todos los fans de la aclamada serie.',4,'Salamandra','Castellano',2020,860,'img-1633354803883.png'),(3,'La Espada del Destino',4,2,895,'La vida de un brujo cazador de monstruos no es facil. Tan pronto puede uno tener que meterse hasta el cuello en un estercolero para eliminar a la bestia carronera que amenaza la ciudad; intentando no atrapar una infeccion incurable; como se puede encontrar unido a la caceria de uno de los ultimos dragones; en la que la cuestion no es si los cazadores conseguiran matar a la pobre bestia; sino que pasara cuando tengan que repartirse el botin. Magos; principes; estarostas; voievodas; druidas; vexlings; driadas; juglares y criaturas de todo pelaje pueblan esta tierra; enzarzados en conflictos de supervivencia; codicia y amor; y entre ellos avanza; solitario; el brujo Geralt de Rivia. Andrzej Sapkowski es el gran renovador de la literatura fantastica de nuestros tiempos; un genio del lenguaje y la caracterizacion cuya prosa ya ha hechizado a millones de lectores en todo el mundo',3,'Alamut','Castellano',2015,254,'img-1633212052483.jpg'),(4,'El Talismán',3,1,950,'Una historia de mundos paralelos, peligros adultos y enfrentamientos mágicos que marcarán el destino futuro del joven. Vamos, como la vida misma. El talismán presenta en parte las mejores virtudes de ambos autores, Stephen King Y Peter Straub, Por un lado el uso, que aparece en ambos autores, de elementos banales acrecentados mágicamente para inquietar, las referencias a la cultura popular americana o la descripción de personajes y paisajes que ambos usan de manera parecida. Por otro lado, ya específicamente, King aporta al libro el ambiente fantástico que aparece en su propia serie de La Torre Oscura mientras Straub parece (aunque es difícil saber quién hace qué en este libro) aportar una sutil ironía, un poco más refinada que la habitual en King, sobre cómo contar una historia de este tipo cuando los personajes son conscientes de que forman parte de un tipo de historia determinado.',4,'Booket','Castellano',2017,672,'img-1633212170583.jpg'),(5,'Los Crímenes de Grindelwald',1,1,930,'Al final del primer episodio, el poderoso mago oscuro Gellert Grindelwald es capturado con la ayuda de Newt Scamander. Sin embargo, Grindelwald logra escapar y cumple con su amenaza de alistar nuevos seguidores, ocultándoles sus verdaderas intenciones: conseguir que los magos de sangre pura dominen a los muggles. En un esfuerzo por frustrar los planes de Grindelwald, Albus Dumbledore le pide ayuda a Newt, su ex alumno de Hogwarts, y éste acepta sin imaginar los peligros que le esperan. Así pues, cuando el amor y la lealtad son puestos a prueba, incluso entre amigos y familiares, el mundo mágico se muestra cada vez más dividido.',3,'Salamandra','Castellano',2018,272,'img-1633212246832.jpg'),(6,'La Rueda del Tiempo',5,1,1150,'Elayne, Nynaeve y Aviendha prosiguen con sus investigaciones en Ebou Dar para encontrar el ter’angreal con el que podrían frenar la espantosa ola de calor que azota el mundo. Para ello se reúnen con los Marinos, quienes dan el nombre de Cuenco de los Vientos al objeto. Egwene continúa con su lucha para ser la Sede Amyrlin escogida por las Aes Sedai rebeldes, y acabar con el control que sobre ella ejercen las Asentadas y otros grupos de hermanas. Entre tanto, en los distintos reinos, nobles y dirigentes continúan buscando su propio beneficio, sin tener presente que la mano del Oscuro está tocando el mundo y que la Última Batalla se acerca.',4,'Minotauro','Castellano',2005,768,'img-1633212364698.jpg'),(7,'El Temor de un Hombre Sabio',4,1,1310,'Todo hombre sabio teme tres cosas: la tormenta en el mar, la noche sin luna y la ira de un hombre amable. El hombre había desaparecido. El mito no. Músico, mendigo, ladrón, estudiante, mago, trotamundos, héroe y asesino, Kvothe había borrado su rastro. Y ni siquiera ahora que le han encontrado, ni siquiera ni siquiera ahora que le han encontrado, ni siquiera ahora que las tinieblas invaden los rincones del mundo, está dispuesto a regresar. Pero su historia prosigue, la aventura continúa, y Kvothe seguirá contándola para revelar la verdad tras la leyenda.  «La nueva promesa de la literatura fantástica.',4,'DeBolsillo','Castellano',2012,1008,'img-1633212463818.jpg'),(8,'El Hobbit',3,1,1310,'Smaug parecia profundamente dormido cuando Bilbo espio una vez mas desde la entrada. Pero fingia estar dormido! ¡Estaba vigilando la entrada del tunel!... Sacado de su comodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiracion que pretende apoderarse del tesoro de Smaug el Magnifico, un enorme y muy peligroso dragon...Todos los que aman esos libros para ninos que pueden ser leidos y releidos por adultos han de tomar buena cuenta de que una nueva estrella ha aparecido en esa constelación',3,'Salamandra','Castellano',2018,310,'img-1633212633368.jpg'),(9,'El Señor de los Anillos - La comunidad del Anillo',3,1,1200,'En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal',3,'Salamandra','Castellano',2018,0,'img-1633212721239.jpg'),(10,'Harry Potter el Legado Maldito',1,1,1500,'Mientras Harry espera impaciente en casa de sus insoportabl es tíos el inicio del segundo curso del Colegio Hogwarts',1,'','',0,0,'img-1633355017825.jpg'),(12,'Harry Potter y la cámara secreta',1,1,1200,'Mientras Harry espera impaciente en casa de sus insoportabl es tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería, un elfo aparece en su habitación y le advierte de que una amenaza mortal se cierne sobre la escue la. Harry no se lo piensa dos veces y, acompañado de Ron, s e dirige a Hogwarts en un coche volador. Pero, ¿puede un ap rendiz de mago defender la escuela de los malvados que prete nden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos pel igrosos, Harry y sus amigos Ron y Hermione tendrán que enfr entarse con arañas gigantes, serpientes encantadas, fantasm as enfurecidos y, sobre todo, con la mismísima reencarnaci n de su más temible adversario.',1,'Salamandra','Castellano',2019,341,'img-1633213382626.png'),(13,'La Morada - El Exilio -El Refugio  ',4,1,1530,'Por primera vez, en un solo volumen, la trilogía El elfo Oscuro de R.A. Salvatore, que en su día se publicó en tes libros: La morada, EL Exilio y El refugio. Prizzt Do´Urden, el Elfo Oscuro, es uno de los personajes más emblemáticos del universo de los Reinos Olvidados. R. A. Salvatore nos cuenta sus orígenes en la exótica ciudad subterránea de Menzoberranzan, donde moran los elfos oscuros desde hace milenios, su posterior exilio y aventuras en los túneles de la Antípoda Oscura, siempre huyendo de la venganza de su familia y de la maligna Reina Araña, y, por último, su salida al mundo de la superficie, donde buscará ser aceptado como un igual entre las razas del exterior.',1,'Timunmas','Castellano',2017,1010,'img-1635119958663.jpg'),(46,'esta es la ultima prueba',1,1,1200,'La vida de un brujo cazador de monstruos no es facil. Tan pronto puede uno tener que meterse hasta el cuello en un estercolero para eliminar a la bestia carronera que amenaza la ciudad; intentando no atrapar una infeccion incurable; como se puede encontrar unido a la caceria de uno de los ultimos dragones; en la que la cuestion no es si los cazadores conseguiran matar a la pobre bestia; sino que pasara cuando tengan que repartirse el botin. Magos; principes; estarostas; voievodas; druidas; vexlings; driadas; juglares y criaturas de todo pelaje pueblan esta tierra; enzarzados en conflictos de supervivencia; codicia y amor; y entre ellos avanza; solitario; el brujo Geralt de Rivia. Andrzej Sapkowski es el gran renovador de la literatura fantastica de nuestros tiempos; un genio del lenguaje y la caracterizacion cuya prosa ya ha hechizado a millones de lectores en todo el mundo',4,'Salamandra','Castellano',2020,272,'img-1635519007157.jpg'),(47,'ahora si                ',1,4,895,'George R. R. Martin narra la fascinante historia de los Targaryen, la dinastía que reinó en Poniente trescientos años antes del inicio de \'Canción de hielo y fuego\', la saga que inspiró la serie de HBO: Juego de tronos. Siglos antes de que tuvieran lugar los acontecimientos que se relatan en \'Canción de hielo y fuego\', la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón. Aquí tenemos el primero de los dos volúmenes en el que el autor de Juego de tronos nos cuenta, con todo lujo de detalles, la historia de tan fascinante familia: empezando por Aegon I Targaryen, creador del icónico Trono de Hierro, y seguido por el resto de las generaciones de Targaryens que lucharon con fiereza por conservar el poder, y el trono, hasta la llegada de la guerra civil que casi acaba con ellos. ¿Qué pasó realmente durante la Danzade dragones? ¿Por qué era tan peligroso acercarse a Valyria después de la Maldición? ¿Cómo era Poniente cuando los dragones',1,'Timunmas','asdfas',2018,672,'img-1636062416753.jpg'),(49,'daf  ',1,1,1200,'ellobo magico',1,'Salamandra','ruso',1920,672,'img-1636388617118.jpg');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recommended_ages`
--

DROP TABLE IF EXISTS `recommended_ages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recommended_ages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recommended_ages`
--

LOCK TABLES `recommended_ages` WRITE;
/*!40000 ALTER TABLE `recommended_ages` DISABLE KEYS */;
INSERT INTO `recommended_ages` VALUES (1,'0 - 5'),(2,'6 - 10'),(3,'11 - 17'),(4,'+ 18');
/*!40000 ALTER TABLE `recommended_ages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `password` varchar(70) NOT NULL,
  `birthday` date NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Juan','Carlos','raul.r.escobar@hotmail.com.ar','Villa Rosa','$2a$10$t.Do13RyvkvnjR8GH8/6ZO4rz4s8RB00//K86cMzmSQ9IR.2jX7i6','2021-10-06','img-1633996834680.png','admin'),(26,'Pamela','','pame@mail.com','','$2a$10$.whSTF2YbyYkjOHQN0AXmeze11fLXk/DLSo29PZY6hqeRMgMU8OfC','0000-00-00','img-1636467655572.png','user'),(27,'Raul','','raul1@mail.com','','$2a$10$3yD/Qg0TwFlmF9u6YC2ibOLqyvvWRYdxicD2NnOpXqMYZAkcLF1de','0000-00-00','user-image.png','user'),(28,'admin','','admin@admin.com','','$2a$10$pHzNLRJQDXhGj.ZTBo9vVuUHrTU8lllFI5vb1qq65km3R9G4F71K2','0000-00-00','user-image.png','admin'),(29,'Raul','','raul@mail.com','','$2a$10$T8MXhiQMHhflUaQJb/9hUeFqxzeCjCFOAbkn2ImJJNkKhVee5SZYm','0000-00-00','user-image.png','user'),(30,'Pamela','','pamela1@mail.com','','$2a$10$lrzm.KpXoLpGBJdhmrCMu.sSgSxIklgREN1Gp62lR9i9BIlqYLjRy','0000-00-00','user-image.png','user'),(31,'dafne','','dafne@mail.com','','$2a$10$Rx0c9/xzffDKxMojXMlFOuQyZTKFvzXKqExYH7uVr8KcOUlO.1z9G','0000-00-00','user-image.png','user'),(32,'Ferdigan','Molina','fer@mail.com','Buenos aires','$2a$10$LR/2XHcpdnis1gbzZd5gYOUN0dmRI3VwUjoIoC..0j0XRgADxp.m6','2000-07-25','img-1636463427978.png','user'),(33,'Ailen','','ailen@mail.com','Buenos aires','$2a$10$HDFLc40u6GjyC3DdQDWn6.IqaYG1VKt/yozEleveiemWgbeYah1eK','2000-06-14','img-1636464914127.png','user'),(34,'Charly','','mail1@mail.com','Buenos aires','$2a$10$x2ofX5BCw/0PoeyMAKoWNeJ62Z3Ez.WlISCTj5SoNVP2WhFmJqNCO','2001-02-14','img-1636494815619.png','user');
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

-- Dump completed on 2021-11-13 19:15:47
