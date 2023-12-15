
drop table if exists users cascade;

--### H2 SQL database
/**
create table users (
    id varchar(255) primary key, 
    email varchar(255) not null unique, 
    name varchar(255) not null, 
    password varchar(255) not null, 
    data uuid default random_uuid()
);
**/

--### POSTGRSQL
create table users (
    id uuid NOT NULL, 
    email varchar(255) not null unique, 
    name varchar(255) not null, 
    password varchar(255) not null, 
    CONSTRAINT city_pkey PRIMARY KEY (id)
);

DELETE FROM users;

INSERT INTO users (id, name, email, password) VALUES ('b4067893-aceb-4eff-8903-446dea3d174e', 'Zaxey', 'zaxey@email.com','$2a$12$aeWJaEWmq2PhYmZtSYHhTubglhJNIBFj4yLTosesStkAXsE86ZSju');
INSERT INTO users (id, name, email, password) VALUES ('0aec8773-d0b3-4c52-b12e-4cfedc5ae93a', 'Tinoyko', 'tinoyko@email.com', '$2a$12$aeWJaEWmq2PhYmZtSYHhTubglhJNIBFj4yLTosesStkAXsE86ZSju');
INSERT INTO users (id, name, email, password) VALUES ('cc1690f9-c6fb-4c58-bf05-3331950c3e60', 'admin', 'admin@email.com', '$2a$12$iJcm10YgZIpBZLKLsgmn.eof/dMWJ3fmYLDD2ZDlw4T3rb4ajwbme');