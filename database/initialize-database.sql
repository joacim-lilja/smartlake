-- Table: accounts
CREATE TABLE accounts (
   username VARCHAR(255) PRIMARY KEY NOT NULL,
   hashedPassword VARCHAR(255) NOT NULL,
   authorityLevel VARCHAR(255) NOT NULL
);





-- Table: water bodies
CREATE TABLE waters (
   waterUUID VARCHAR(255) PRIMARY KEY,
   nameSwedish VARCHAR(255),
   lengthKM INTEGER,
   areaKM REAL,
   coordLat REAL,
   coordLng REAL,
   body TEXT
);

-- Table: data types
CREATE TABLE waterDataType (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   waterUUID VARCHAR(255),
   provider VARCHAR(255) NOT NULL,
   propertyName VARCHAR(255) NOT NULL,
   unit VARCHAR(255) NOT NULL,
   FOREIGN KEY(provider) REFERENCES accounts(username),
   FOREIGN KEY(waterUUID) REFERENCES waters(waterUUID)
);

-- Table: data values
CREATE TABLE dataValue (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   waterDataTypeId INTEGER NOT NULL,
   propertyName VARCHAR(255) NOT NULL,
   provider VARCHAR(255) NOT NULL,
   timeOfMeasurement DATETIME NOT NULL,
   value VARCHAR(255) NOT NULL,
   FOREIGN KEY(provider) REFERENCES accounts(username),
   FOREIGN KEY(waterDataTypeId) REFERENCES waterDataType(id)
);

-- Insert basic account
INSERT INTO accounts(username, hashedPassword, authorityLevel) VALUES("admin", "password", "admin");
