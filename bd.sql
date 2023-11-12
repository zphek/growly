create database growly_db;
drop database growly_db;

use growly_db;

describe projects;

create table users
(id int PRIMARY KEY auto_increment, 
username varchar(50) unique, 
passw varchar(50),
user_class varchar(20),
email varchar(100) unique,
money double);

create table projects
(id int auto_increment PRIMARY KEY, 
p_name varchar(100) unique,
p_description TEXT,
p_start DATE,
p_end DATE,
goal DOUBLE,
p_state BOOL,
raised double,
user_id int,
FOREIGN KEY (user_id) REFERENCES users(id));

create table transactions
(id int auto_increment PRIMARY KEY,
amount double,
t_date DATE,
user_id INT,
p_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (p_id) REFERENCES projects(id));
