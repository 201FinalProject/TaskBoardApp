DROP TABLE IF EXISTS Tasks;
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

CREATE TABLE Tasks (
	taskId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	taskName VARCHAR(255),
    person VARCHAR(255),
    difficulty VARCHAR(255),
    completionDate VARCHAR(255),
    sixdigitCode VARCHAR(6) NOT NULL,
    FOREIGN KEY (sixdigitCode) REFERENCES Projects(sixdigitCode)
);

DROP PROCEDURE IF EXISTS getHistory;
DELIMITER $$
CREATE PROCEDURE getHistory()

BEGIN
SELECT taskName, completedby, difficulty, completionDate FROM History;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS getTasksByGroup;
DELIMITER $$
CREATE PROCEDURE getTasksByGroup(IN id VARCHAR(255))

BEGIN
SELECT taskName, person, difficulty, completionDate FROM Tasks WHERE Tasks.sixdigitCode = id;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS addTask;
DELIMITER $$
CREATE PROCEDURE addTask(IN taskName_ VARCHAR(255), IN person_ VARCHAR(255), IN difficulty_ VARCHAR(255), 
IN completionDate_ VARCHAR(255), IN sixdigitCode_ VARCHAR(6))

BEGIN
INSERT INTO Tasks(taskName, person, difficulty, completionDate, sixdigitCode)
VALUES (taskName_, person_, difficulty_, completionDate_, sixdigitCode_);
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS deleteTask;
DELIMITER $$
CREATE PROCEDURE deleteTask(IN taskName_ VARCHAR(255), IN person_ VARCHAR(255),
IN completionDate_ VARCHAR(255), IN sixdigitCode_ VARCHAR(6))

BEGIN
DELETE FROM Tasks WHERE Tasks.taskName = taskName_
AND Tasks.person = person_
AND Tasks.completionDate = completionDate_
AND Tasks.sixdigitCode = sixdigitCode_;
END $$
DELIMITER ;

SELECT * FROM Users;
SELECT * FROM Projects;
SELECT * FROM Leaderboard;
SELECT * FROM History;