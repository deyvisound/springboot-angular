
drop table if exists users cascade;

create table users (
    id bigint generated by default as identity, 
    email varchar(255) not null unique, 
    name varchar(255) not null, 
    password varchar(255) not null, 
    primary key (id)
);

DELETE FROM users;

INSERT INTO users (name, email, password) VALUES ( 'Zaxey', 'zaxey@email.com','$2a$12$aeWJaEWmq2PhYmZtSYHhTubglhJNIBFj4yLTosesStkAXsE86ZSju');
INSERT INTO users ( name, email, password) VALUES ( 'Tinoyko', 'tinoyko@email.com', '$2a$12$aeWJaEWmq2PhYmZtSYHhTubglhJNIBFj4yLTosesStkAXsE86ZSju');
INSERT INTO users ( name, email, password) VALUES ( 'admin', 'admin@email.com', '$2a$12$iJcm10YgZIpBZLKLsgmn.eof/dMWJ3fmYLDD2ZDlw4T3rb4ajwbme');