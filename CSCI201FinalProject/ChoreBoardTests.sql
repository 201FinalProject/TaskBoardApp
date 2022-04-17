DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Leaderboard;
DROP TABLE IF EXISTS History;
DROP TABLE IF EXISTS Projects;

DROP DATABASE IF EXISTS ChoreboardDatabase;
CREATE DATABASE ChoreboardDatabase;
USE ChoreboardDatabase;

CREATE TABLE Projects (
	assignment VARCHAR(200) NOT NULL,
    description VARCHAR(1000),
    sixdigitCode VARCHAR(6) PRIMARY KEY NOT NULL
);

CREATE TABLE Users (
	username VARCHAR(64) NOT NULL UNIQUE PRIMARY KEY,
	email VARCHAR(64) NOT NULL UNIQUE,
    pw VARCHAR(64) NOT NULL,
    sixdigitCode VARCHAR(6) NOT NULL,
    FOREIGN KEY (sixdigitCode) REFERENCES Projects(sixdigitCode)
);

CREATE TABLE Leaderboard (
	rating INT,
    sixdigitCode VARCHAR(6) NOT NULL,
    username VARCHAR(64) PRIMARY KEY NOT NULL,
    FOREIGN KEY (sixdigitCode) REFERENCES Projects(sixdigitCode)
);

CREATE TABLE History (
	taskName VARCHAR(255),
    completedBy VARCHAR(255),
    difficulty VARCHAR(255),
    completionDate VARCHAR(255),
	sixdigitCode VARCHAR(6) NOT NULL,
	FOREIGN KEY (sixdigitCode) REFERENCES Projects(sixdigitCode)
);


    
INSERT INTO Projects (assignment, description, sixdigitCode)
VALUES('Project 1', '1', 'AAAAAA'), ('Project 2', '2', 'BBBBBB'), ('Project 3', '3', 'CCCCCC'), 
('Project 4', '4', 'DDDDDD'), ('Project 5', '5', 'EEEEEE'), ('Project 6', '6', 'FFFFFF');

INSERT INTO Users (username, email, pw, sixdigitCode)
VALUES('mattq', 'matt@usc.edu', 'asdf', 'AAAAAA'),
	('nickc', 'nick@usc.edu', 'efgh', 'BBBBBB'),
    ('aadeshb', 'aadesh@usc.edu', 'ijkl', 'CCCCCC'),
    ('slaterg', 'slater@usc.edu', 'mnop', 'DDDDDD'),
    ('paulk', 'paul@usc.edu', 'qrst', 'EEEEEE'),
    ('adityah', 'aditya@usc.edu', 'uvwx', 'FFFFFF'),
    ('mattq2', 'matt2@usc.edu', 'asdf2', 'AAAAAA'),
    ('nickc2', 'nick2@usc.edu', 'efgh2', 'BBBBBB');
    
INSERT INTO History (taskName, completedBy, difficulty, completionDate, sixdigitCode)
VALUES('laundry', 'mattq', '4', '1/7/2022', 'AAAAAA'), ('dishes', 'mattq2', '3', '4/4/2020', 'AAAAAA'),
('clean', 'aadeshb', '5', '3/2/2019', 'CCCCCC');

DROP PROCEDURE IF EXISTS getHistory;
DELIMITER $$
CREATE PROCEDURE getHistory()

BEGIN
SELECT taskName, completedby, difficulty, completionDate FROM History;
END $$
DELIMITER ;

SELECT * FROM Users;
SELECT * FROM Projects;
SELECT * FROM Leaderboard;
SELECT * FROM History;