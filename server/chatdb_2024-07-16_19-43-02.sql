-- ************************************************************
-- Antares - SQL Client
-- Version 0.7.25
-- 
-- https://antares-sql.app/
-- https://github.com/antares-sql/antares
-- 
-- Host: 127.0.0.1 (PostgreSQL 16.3)
-- Database: chatdb
-- Generation time: 2024-07-16T19:44:00+07:00
-- ************************************************************


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE SCHEMA "chatdb";




-- Dump of table messages
-- ------------------------------------------------------------

DROP TABLE IF EXISTS "chatdb"."messages";

CREATE SEQUENCE "chatdb"."messages_id_seq"
   START WITH 1
   INCREMENT BY 1
   MINVALUE 1
   MAXVALUE 2147483647
   CACHE 1;

CREATE TABLE "chatdb"."messages"(
   "id" integer DEFAULT nextval('chatdb.messages_id_seq'::regclass) NOT NULL,
   "username" character varying(50) NOT NULL,
   "message" text
);

CREATE UNIQUE INDEX messages_pkey ON chatdb.messages USING btree (id);


INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (1, 'testChat', 'test');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (2, 'testChat', 'testt');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (3, 'test', 'test');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (4, 'test', 'hallo');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (5, 'ada', 'ada');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (6, 'ada', 'adadeh');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (7, 'test', 'test');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (8, 'test', 'adadeh');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (9, 'test', 'test');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (10, 'testChat', 'test');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (11, 'test', 'apa bang?');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (12, 'testChat', 'gak papa');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (13, 'chanz', 'testt Chanz');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (14, 'test', 'halo chanz');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (15, 'test', 'test');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (16, 'ch', 'testt');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (17, 'ch', 'testtt');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (18, 'test', 'tesstt');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (19, 'test', 'test');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (20, 'test', 'hallo');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (21, 'test', 'adadeh');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (22, 'ch', 'testtt');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (23, 'test', 'hallo ch');
INSERT INTO "chatdb"."messages" ("id", "username", "message") VALUES (24, 'ch', 'hallo juga');




-- Dump of table users
-- ------------------------------------------------------------

DROP TABLE IF EXISTS "chatdb"."users";

CREATE SEQUENCE "chatdb"."users_id_seq"
   START WITH 1
   INCREMENT BY 1
   MINVALUE 1
   MAXVALUE 2147483647
   CACHE 1;

CREATE TABLE "chatdb"."users"(
   "id" integer DEFAULT nextval('chatdb.users_id_seq'::regclass) NOT NULL,
   "username" character varying(50) NOT NULL,
   "password" text NOT NULL
);

CREATE UNIQUE INDEX users_pkey ON chatdb.users USING btree (id);
CREATE UNIQUE INDEX users_username_key ON chatdb.users USING btree (username);


INSERT INTO "chatdb"."users" ("id", "username", "password") VALUES (1, 'chandra', '123');
INSERT INTO "chatdb"."users" ("id", "username", "password") VALUES (2, 'test', '$2a$10$rSTNSpu51taN41BinPUkLOfwdFpbfnbwrMIrZR0sFyHx3VlTJ7jye');
INSERT INTO "chatdb"."users" ("id", "username", "password") VALUES (5, 'testChat', '$2a$10$UFXtCOuagsAeaRcdd84Da.zdLNL0eX8x12/H26i0SZSOQHaCY78we');
INSERT INTO "chatdb"."users" ("id", "username", "password") VALUES (7, 'chanz', '$2a$10$bTBvsG4xfZwrzSTQiYQxd.Kulh0MPgT4QDw3TVHAzhRLn464ikRDS');
INSERT INTO "chatdb"."users" ("id", "username", "password") VALUES (8, 'ch', '$2a$10$O8CkHp0TbJWbvtcHS/tHdej1XHEmmwbZCTMqTGLLibBN/Bgt1uj9e');




-- Dump of functions
-- ------------------------------------------------------------






-- Dump completed on 2024-07-16T19:44:00+07:00