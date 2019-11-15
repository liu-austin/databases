DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userid int primary key auto_increment,
  username varchar(255) not null
);

-- CREATE TABLE rooms (
--   roomid int primary key auto_increment,
--   roomname varchar(255) not null
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  userid int,
  storedmessage varchar(255),
  roomname varchar(255),
  foreign key(userid) references users(userid)
  -- foreign key(roomid) references rooms(roomid)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

