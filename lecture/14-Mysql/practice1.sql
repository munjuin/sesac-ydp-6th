create database practice character set utf8mb4 collate utf8mb4_unicode_ci;

use practice;

show databases;

create table member (
	id  varchar(20) not null primary key,
    name varchar(5) not null,
    age int null,
    gender varchar(2) not null,
    email varchar(50) null,
    promotion varchar(2) null default 'x'
);

alter table member modify id varchar(10);
alter table member drop age;
alter table member add interest varchar(100);

desc member;

create table user (
	id  varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);

desc user;

insert into user values
	('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
    ('sexysund', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
    ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
    ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
    ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
    ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
    ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);
    
select * from user;

select * from user order by birthday asc;
select * from user where gender = 'M' order by name desc;
select id, name from user where birthday between '1990-01-01' and '1999-12-31';
select * from user where month(birthday) = 06 order by birthday;
select * from user where gender = 'M' and birthday between '1970-01-01' and '1979-12-31';
select * from user order by age desc limit 3;
select * from user where age between 25 and 50;
update user set pw = 12345678 where id = 'hong1234';
delete from user where id = 'junkrat';