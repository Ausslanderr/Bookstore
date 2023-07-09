-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema BookStore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BookStore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BookStore` DEFAULT CHARACTER SET utf8 ;
USE `BookStore` ;

-- -----------------------------------------------------
-- Table `BookStore`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BookStore`.`Usuario` (
  `idUsuario` INT NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `CPF` VARCHAR(11) NOT NULL,
  `Senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BookStore`.`Funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BookStore`.`Funcionario` (
  `idFuncionario` INT NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `CPF` VARCHAR(11) NOT NULL,
  `Senha` VARCHAR(45) NOT NULL,
  `Cargo` VARCHAR(45) NOT NULL,
  `Salario` FLOAT NOT NULL,
  PRIMARY KEY (`idFuncionario`),
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BookStore`.`Endereço`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BookStore`.`Endereço` (
  `idEndereço` INT NOT NULL,
  `Bairro` VARCHAR(45) NOT NULL,
  `Rua` VARCHAR(45) NOT NULL,
  `Numero` INT NOT NULL,
  `Estado` VARCHAR(45) NOT NULL,
  `Cidade` VARCHAR(45) NOT NULL,
  `CEP` VARCHAR(8) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idEndereço`, `Usuario_idUsuario`),
  INDEX `fk_Endereço_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Endereço_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `BookStore`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `BookStore`.`Pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BookStore`.`Pedido` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` INT NOT NULL,
  `totalPedido` FLOAT NOT NULL,
  `statusPedido` VARCHAR(45) NOT NULL,
  `dataPedido` DATE NOT NULL,
  PRIMARY KEY (`idPedido`),
  CONSTRAINT `fk_Pedido_Usuario`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `BookStore`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `BookStore`.`Livros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BookStore`.`Livros` (
  `idLivro` INT NOT NULL AUTO_INCREMENT,
  `Titulo` VARCHAR(45) NOT NULL,
  `Autor` VARCHAR(45) NOT NULL,
  `Editora` VARCHAR(45) NOT NULL,
  `dataPublicacao` DATE NOT NULL,
  `Preco` FLOAT NOT NULL,
  `Descricao` VARCHAR(100) NOT NULL,
  `Estoque` INT NOT NULL,
  `Pedido_idPedido` INT,
  PRIMARY KEY (`idLivro`),
  INDEX `fk_Livros_Pedido_idx` (`Pedido_idPedido` ASC) VISIBLE,
  CONSTRAINT `fk_Livros_Pedido`
    FOREIGN KEY (`Pedido_idPedido`)
    REFERENCES `BookStore`.`Pedido` (`idPedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `BookStore`.`Carrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BookStore`.`Carrinho` (
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`),
  CONSTRAINT `fk_Carrinho_Usuario`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `BookStore`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
