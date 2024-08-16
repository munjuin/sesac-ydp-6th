-- 데이터베이스 목록 확인
SHOW databases;

-- codingon 데이터베이스 선택
USE codingon;

-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 todo 테이블이 있다면 기존 테이블 지움
DROP TABLE if exists todo;

-- todo 테이블 생성
create table todo(

	id int not null primary key auto_increment,
    title varchar(20) not null,
    done boolean not null default false
);



-- todo 테이블 데이터 추가
INSERT INTO todo values (null, 'my todo1', 0);
INSERT INTO todo values (null, 'my todo2', 0);
INSERT INTO todo values (null, 'my todo3', 0);
INSERT INTO todo values (null, 'my todo4', 1);
INSERT INTO todo values (null, 'my todo5', 1);
INSERT INTO todo values (null, 'my todo6', 1);

-- todo 테이블 구조 보기
DESC todo; 

-- todo 테이블 보기
select * from todo;

update todo set title = '내가 할일 2번' where id = 2;

delete from todo where id = 3;

select * from mysql.user;

create user 'user'@'%' identified by '1234';
create user 'user'@'%' identified by With mysql_native_password by '1234';

grant all privileges on *.* to 'user'@'%' with grant option;