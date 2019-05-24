CREATE TABLE flight(id INT NOT NULL,
                    departureCity VARCHAR(255),
                    arrivalCity VARCHAR(255),
                    departureDate VARCHAR(255),
                    arrivalDate VARCHAR(255),
                    flightClass VARCHAR(255),
                    time VARCHAR(255),
                    price DOUBLE,
                    PRIMARY KEY (id))ENGINE=InnoDB;

CREATE TABLE passenger(id INT NOT NULL,
					             passengerName VARCHAR(255),
                       surname VARCHAR(255),
                       email VARCHAR(255),
                       discount BOOLEAN,
                       PRIMARY KEY(id))ENGINE=InnoDB;

CREATE TABLE bookings(id INT NOT NULL,
					            passenger INT,
                      flight INT,
                      PRIMARY KEY(id),
                      FOREIGN KEY(passenger) REFERENCES passenger(id),
                      FOREIGN KEY(flight) REFERENCES flight(id))ENGINE=InnoDB;

INSERT INTO flight VALUES(0, 'Warszawa', 'Berlin', '2019-06-23 17:30', '2019-06-23 19:00', 'ekonomiczna', '1h 30min', 56);
INSERT INTO flight VALUES(1, 'Tokio', 'Moskwa', '2019-10-12 09:30', '2019-10-12 21:30', 'business', '12h', 1980);
INSERT INTO flight VALUES(2, 'Nicea', 'Warszawa', '2019-06-14 05:35', '2019-06-14 08:15', 'ekonomiczna', '2h 35min', 435);
INSERT INTO flight VALUES(3, 'Madryt', 'Rzym', '2019-07-12 14:00', '2019-07-12 15:30', 'business', '1h 30min', 241);

INSERT INTO flight VALUES(4, 'Berlin', 'Warszawa', '2019-06-30 09:20', '2019-06-30 10:50', 'ekonomiczna', '1h 30min', 86);
INSERT INTO flight VALUES(5, 'Warszawa', 'Nowy Jork', '2019-07-12 06:55', '2019-07-12 19:55', 'ekonomiczna', '13h', 1895);
INSERT INTO flight VALUES(6, 'Katowice', 'Barcelona', '2019-06-19 13:00', '2019-06-19 16:00', 'ekonomiczna', '3h', 420);
INSERT INTO flight VALUES(7, 'Warszawa', 'Sydney', '2019-08-14 03:00', '2019-08-14 19:00', 'business', '16h', 3249);
INSERT INTO flight VALUES(8, 'Warszawa', 'Hiroszima', '2019-06-07 05:00', '2019-08-14 22:00', 'ekonomiczna', '17h', 2199);
INSERT INTO flight VALUES(9, 'Katowice', 'Reykjavik', '2019-08-14 12:00', '2019-08-14 16:30', 'business', '4h 30min', 987);
INSERT INTO flight VALUES(10, 'Warszawa', 'Akureyri', '2019-09-22 08:00', '2019-09-22 13:00', 'ekonomiczna', '5h', 1256);


INSERT INTO flight VALUES(11, 'Katowice', 'Londyn', '2019-06-22 09:00', '2019-06-22 11:15', 'ekonomiczna', '2h 15min', 456);
INSERT INTO flight VALUES(12, 'Katowice', 'Edynburg', '2019-06-25 06:00', '2019-06-25 08:30', 'business', '2h 30min', 653);

INSERT INTO passenger VALUES(1, 'Kamil', 'Nowak', 'www@gmail.com', true);
INSERT INTO passenger VALUES(2, 'Karolina', 'Kowalska', 'qwert@.gmail.com', false);
