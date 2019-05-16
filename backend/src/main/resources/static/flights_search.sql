CREATE TABLE flight(id INT NOT NULL AUTO_INCREMENT,
                    departureCity VARCHAR(255),
                    arrivalCity VARCHAR(255),
                    departureDate VARCHAR(255),
                    arrivalDate VARCHAR(255),
                    flightClass VARCHAR(255),
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
                      
INSERT INTO flight VALUES(1, 'Warszawa', 'Berlin', '2019-06-23 17:30', '2019-06-23 19:00', 'ekonomiczna', 56);
INSERT INTO flight VALUES(2, 'Tokio', 'Moskwa', '2019-10-12 09:30', '2019-10-12 21:30', 'business', 1980);
