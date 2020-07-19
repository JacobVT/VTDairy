DROP TABLE if exists Area;
DROP TABLE if exists Field;
DROP TABLE if exists FieldSections;

CREATE TABLE Area (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	value INT,
	size SMALLINT COMMENT 'acres',
	PRIMARY KEY (id),
);

CREATE TABLE Field (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE FieldSections (
	field INT unsigned NOT NULL,
	area INT unsigned NOT NULL,
	PRIMARY KEY (field, area),
	FOREIGN KEY(field) REFERENCES Field(id),
	FOREIGN KEY(area) REFERENCES Area(id)
);

CREATE TABLE Seed (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE SeedRecord (
	seed INT unsigned NOT NULL,
	seeding INT unsigned NOT NULL,
	percentage PERCENTAGE NOT NULL,
	PRIMARY KEY (seed, area),
	FOREIGN KEY(seed) REFERENCES Seed(id),
	FOREIGN KEY(seeding) REFERENCES Seeding(id)
);

CREATE TABLE Seeding (
	id INT unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	acres TINYINT unsigned NOT NULL,
	spa TINYINT unsigned NOT NULL COMMENT 'Seeds Per Acre',
	date DATE NOT NULL,
	notes VARCHAR(512),
	planted_in INT unsigned NOT NULL COMMENT 'Area ID',
	PRIMARY KEY (id),
	FOREIGN KEY(planted_in) REFERENCES Area(id)
);