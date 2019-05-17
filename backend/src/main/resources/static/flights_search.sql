CREATE TABLE flight(id INT NOT NULL AUTO_INCREMENT,
                    departureCity VARCHAR(255),
                    arrivalCity VARCHAR(255),
                    departureDate VARCHAR(255),
                    arrivalDate VARCHAR(255),
                    flightClass VARCHAR(255),
                    time VARCHAR(255),
                    price DOUBLE,
                    PRIMARY KEY (id))ENGINE=InnoDB;

CREATE TABLE passenger(id INT NOT NULL AUTO_INCREMENT,
					             name VARCHAR(255),
                       surname VARCHAR(255),
                       email VARCHAR(255),
                       PRIMARY KEY(id))ENGINE=InnoDB;

CREATE TABLE bookings(id INT NOT NULL AUTO_INCREMENT,
					            passenger INT,
                      flight INT,
                      PRIMARY KEY(id),
                      FOREIGN KEY(passenger) REFERENCES passenger(id),
                      FOREIGN KEY(flight) REFERENCES flight(id))ENGINE=InnoDB;

INSERT INTO flight VALUES(1, 'Warszawa', 'Berlin', '2019-06-23 17:30', '2019-06-23 19:00', 'ekonomiczna', '1h 30min', 56);
INSERT INTO flight VALUES(2, 'Tokio', 'Moskwa', '2019-10-12 09:30', '2019-10-12 21:30', 'business', '12h', 1980);
INSERT INTO flight VALUES(3, 'Nicea', 'Warszawa', '2019-06-14 05:35', '2019-06-14 08:15', 'ekonomiczna', '2h 35min', 435);
INSERT INTO flight VALUES(4, 'Madryt', 'Rzym', '2019-07-12 14:00', '2019-07-12 15:30', 'business', '1h 30min', 241);

INSERT INTO flight VALUES(5, 'Berlin', 'Warszawa', '2019-06-30 09:20', '2019-06-30 10:50', 'ekonomiczna', '1h 30min', 86);
INSERT INTO flight VALUES(6, 'Moskwa', 'Tokio', '2019-10-22 04:30', '2019-10-22 16:30', 'business', '12h', 2950);
INSERT INTO flight VALUES(7, 'Warszawa', 'Nicea', '2019-06-19 18:00', '2019-06-19 20:35', 'ekonomiczna', '2h 35min', 398);
INSERT INTO flight VALUES(8, 'Rzym', 'Madryt', '2019-07-29 12:00', '2019-07-29 13:30', 'business', '1h 30min', 192);


