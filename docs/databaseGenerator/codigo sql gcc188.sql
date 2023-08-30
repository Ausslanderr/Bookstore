código de geração do banco de dados
CREATE DATABASE `bookstore` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `administrador` (
  `idFuncionario` int NOT NULL,
  `Nome` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `CPF` varchar(11) NOT NULL,
  `Senha` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idFuncionario`),
  UNIQUE KEY `CPF_UNIQUE` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
CREATE TABLE `endereço` (
  `idEndereço` int NOT NULL AUTO_INCREMENT,
  `Bairro` varchar(45) NOT NULL,
  `Rua` varchar(45) NOT NULL,
  `Numero` int NOT NULL,
  `Estado` varchar(45) NOT NULL,
  `Cidade` varchar(45) NOT NULL,
  `CEP` varchar(8) NOT NULL,
  `idPedido` int DEFAULT NULL,
  PRIMARY KEY (`idEndereço`),
  KEY `fk_Endereco_Pedido` (`idPedido`),
  CONSTRAINT `fk_Endereco_Pedido` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `carrinho` (
  `idCarrinho` int NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` int DEFAULT NULL,
  `idLivro` int DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`idCarrinho`),
  KEY `Usuario_idUsuario` (`Usuario_idUsuario`),
  KEY `idLivro` (`idLivro`),
  CONSTRAINT `carrinho_ibfk_1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `carrinho_ibfk_2` FOREIGN KEY (`idLivro`) REFERENCES `livros` (`idLivro`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `itenspedido` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `idPedido` int DEFAULT NULL,
  `idLivro` int DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `preco_unitario` float DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `idLivro` (`idLivro`),
  KEY `itenspedido_ibfk_1` (`idPedido`),
  CONSTRAINT `itenspedido_ibfk_1` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `itenspedido_ibfk_2` FOREIGN KEY (`idLivro`) REFERENCES `livros` (`idLivro`)
) ENGINE=InnoDB AUTO_INCREMENT=282 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `livros` (
  `idLivro` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(45) NOT NULL,
  `Autor` varchar(45) NOT NULL,
  `Editora` varchar(45) NOT NULL,
  `dataPublicacao` date NOT NULL,
  `Preco` float NOT NULL,
  `Descricao` varchar(2000) DEFAULT NULL,
  `Estoque` int NOT NULL,
  `image` longblob,
  PRIMARY KEY (`idLivro`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `pedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` int NOT NULL,
  `totalPedido` float NOT NULL,
  `statusPedido` varchar(45) NOT NULL,
  `dataPedido` date NOT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `fk_Pedido_Usuario` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Pedido_Usuario` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=812 DEFAULT CHARSET=utf8mb3;


CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fone` varchar(11) NOT NULL,
  `data_nascimento` varchar(11) NOT NULL,
  `CPF` varchar(11) NOT NULL,
  `Senha` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `CPF_UNIQUE` (`CPF`),
  UNIQUE KEY `email_unico` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3;
