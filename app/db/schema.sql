DROP DATABASE IF EXISTS Burger_db;

CREATE DATABASE Burger_db;

use Burger_db;

create table burgers(
    id int auto_increment,
    burger_name varchar(100) not null,
    devoured boolean,
    primary key (id)
)