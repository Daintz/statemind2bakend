CREATE DATABASE IF NOT EXISTS statemindbd;

USE statemindbd;

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(16) NOT NULL,
  primary key (id)
);

DESCRIBE users;