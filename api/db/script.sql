ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'jonathan123';
FLUSH privileges;

CREATE DATABASE IF NOT EXISTS
    just_to_study;
USE just_to_study;

CREATE TABLE IF NOT EXISTS products(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY key (id)
);

INSERT INTO products VALUE (0, 'Curso Front End', 1999);
INSERT INTO products VALUE (0, 'Curso Front Back-end', 2999);