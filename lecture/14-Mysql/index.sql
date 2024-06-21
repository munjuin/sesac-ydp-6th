-- 데이터베이스: 데이터의 집합
-- DBMS: Database Management System, 데이터베이스를 운영/관리하는 프로그램
	-- ex. MySQL
-- SQL: 데이터베이스를 구축, 관리하고 활용하기 위해 사용하는 언어
-- 참고) 스키마 == 데이터베이스

-- DDL (Data Definition Language)
-- : 데이터베이스, 테이블을 "정의"하는 언어

-- 1. 데이터베이스 생성
create database codingon character set utf8mb4 collate utf8mb4_unicode_ci;
-- utf8mb4 : 이모지 쓸라면 넣어줘야 함
-- utf8mb4_unicode_ci : 한글을 쓰는경우 정렬을 하는경우를 위해서 사용

-- 2. 데이터베이스 목록
show databases;

-- 3. 데이터베이스 사용 선언
use codingon;

-- 4. 데이터베이스 삭제
drop database codingon;

-- [테이블] 관련 명령어
-- 1. 테이블 생성
create table products(
	id int auto_increment primary key,
    name varchar(50) not null,
    model_number varchar(50) not null,
    series varchar(50) not null
);

-- 2. 테이블 목록 확인
show tables;

-- 3. 테이블 구조 확인
desc products;

-- 4. 테이블 삭제
drop table products;

-- 5. 테이블 수정
-- 이미 생성된 테이블에 데이터가 추가되었는데, 테이블 구조가 바뀌어야 하는 경우
-- 5-1 컬럼 추가alter
-- 기존 데이터들은 new_column 이 갑자기 생겼으니 null 할당 됨
alter table products add new_column varchar(20);
-- 5-2 컬럼 타임 수정
alter table products modify new_column int;
-- 5-3 컬럼 삭제
alter table products drop new_column;






