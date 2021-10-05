CREATE TABLE `Filme` (
  `idFilme` int NOT NULL AUTO_INCREMENT,
  `Descrição` varchar(100) NOT NULL,
  `AnoLancamento` int NOT NULL,
  `Nota` int NOT NULL,
  PRIMARY KEY (`idFilme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
