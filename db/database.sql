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

INSERT INTO users VALUES
  (1, 'Daniel Lopez Rubio', 'daloru@gmail.com', '123456789'),
  (2, 'Daniel Lopez', 'dalo@gmail.com', '987654321'),
  (3, 'Daniel Rubio', 'daru@gmail.com', '789456123'),
  (4, 'Daniel Felipe Lopez', 'dafelo@gmail.com', '456789123');