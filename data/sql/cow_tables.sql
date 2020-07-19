DROP TABLE if exists Cow;
DROP TABLE if exists Building;
DROP TABLE if exists Land;
DROP TABLE if exists Breed;
DROP TABLE if exists CowBreedIdentity;
DROP TABLE if exists LifeStage;
DROP TABLE if exists FoodDistribution;

CREATE TABLE Cow (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128),
	gender SET('M', 'F') NOT NULL,
	birth_date DATE NOT NULL,
	sire INT unsigned,
	damsel INT unsigned,
	tag unsigned SMALLINT,
	tiny_tag unsigned SMALLINT,
	band unsigned SMALLINT,
	source VARCHAR(128),
	image_guid varchar(20),
	PRIMARY KEY (id)

);

CREATE TABLE Building (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	value INT NOT NULL,
	built_on unsigned INT NOT NULL COMMENT 'Land ID',
	PRIMARY KEY (id)
	FOREIGN KEY(built_on) REFERENCES Land(id),
);

CREATE TABLE Land (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	value INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Breed (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE CowBreedIdentity (
	cow INT unsigned NOT NULL,
	breed INT unsigned NOT NULL,
	percentage PERCENTAGE NOT NULL,
	PRIMARY KEY (breed, cow),
	FOREIGN KEY(breed) REFERENCES Breed(id),
	FOREIGN KEY(cow) REFERENCES Cow(id)
);

-- CREATE TABLE Condition (
-- 	id INT unsigned NOT NULL AUTO_INCREMENT,
-- 	name VARCHAR(128) NOT NULL,
-- 	description VARCHAR(512),
-- 	type SET('Injury', 'Defect', ),
-- 	PRIMARY KEY (id)
-- );

CREATE TABLE LifeStage (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	age INT unsigned NOT NULL COMMENT 'months',
	lives_in INT unsigned NOT NULL COMMENT 'Building ID',
	PRIMARY KEY (id),
	FOREIGN KEY(lives_in) REFERENCES Building(id),
);

--
CREATE TABLE FoodDistribution (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	silage PERCENTAGE NOT NULL COMMENT 'S',
	hay PERCENTAGE NOT NULL COMMENT 'H',
	grain PERCENTAGE NOT NULL COMMENT 'G',
	pasture PERCENTAGE NOT NULL COMMENT 'P',
	PRIMARY KEY (id)
);
