DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int primary key auto_increment not null,
  username varchar(255) not null
);

-- CREATE TABLE rooms (
--   roomid int primary key auto_increment,
--   roomname varchar(255) not null
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id int not null auto_increment,
  text varchar(255) not null,
  roomname varchar(255),
  userid int not null,
  foreign key(userid) references users(id)
  -- foreign key(roomid) references rooms(roomid)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
