DROP DATABASE IF EXISTS ChoreboardDatabase;
CREATE DATABASE ChoreboardDatabase;
USE ChoreboardDatabase;


CREATE TABLE GroupTable (
	sixdigitCode VARCHAR(6) PRIMARY KEY NOT NULL,
    username VARCHAR(64) NOT NULL
);

CREATE TABLE Users (
	username VARCHAR(64) NOT NULL UNIQUE PRIMARY KEY,
	email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    sixdigitCode VARCHAR(6),
    FOREIGN KEY (sixdigitCode) REFERENCES GroupTable(sixdigitCode)
);

CREATE TABLE Projects (
	assignment VARCHAR(200) NOT NULL,
    description VARCHAR(1000),
    sixdigitCode VARCHAR(6) NOT NULL,
    FOREIGN KEY (sixdigitCode) REFERENCES GroupTable(sixdigitCode)
);

CREATE TABLE Leaderboard (
	place INT PRIMARY KEY AUTO_INCREMENT,
    sixdigitCode VARCHAR(6) NOT NULL,
    username VARCHAR(64) NOT NULL,
    FOREIGN KEY (sixdigitCode) REFERENCES GroupTable(sixdigitCode)
);

SELECT * FROM Users;
SELECT * FROM GroupTable;
SELECT * FROM Projects;
SELECT * FROM Leaderboard;