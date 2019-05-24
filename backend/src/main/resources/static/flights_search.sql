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
                      
                      
CREATE TABLE hotel(id INT NOT NULL,
					hotelName VARCHAR(255),
                   city VARCHAR(255),
					firstDate VARCHAR(255),
                    secDate VARCHAR(255),
                    time VARCHAR(255),
                    price DOUBLE,
                    PRIMARY KEY (id))ENGINE=InnoDB;
  
  
INSERT INTO hotel VALUES(0, 'Novotel', 'Warszawa', '2019-06-14', '2019-06-24', '10 dni', 365);	
INSERT INTO hotel VALUES(1, 'Golden Tulip', 'Warszawa', '2019-06-14', '2019-06-24', '10 dni', 200);	
INSERT INTO hotel VALUES(2, 'Metro Centrum', 'Warszawa', '2019-06-30', '2019-07-12', '12 dni', 135);	
INSERT INTO hotel VALUES(3, 'Novotel', 'Warszawa', '2019-06-14', '2019-06-24', '10 dni', 365);

INSERT INTO hotel VALUES(4, 'Best Western Hotel', 'Berlin', '2019-06-23', '2019-06-30', '7 dni', 401);
INSERT INTO hotel VALUES(5, 'Park Inn', 'Berlin', '2019-06-23', '2019-06-30', '7 dni', 569);
INSERT INTO hotel VALUES(6, 'Novum Select Hotel', 'Berlin', '2019-06-23', '2019-06-30', '7 dni', 462);

INSERT INTO hotel VALUES(7, 'Matreshka Hotel', 'Moskwa', '2019-10-12', '2019-10-18', '6 dni', 172);
INSERT INTO hotel VALUES(8, 'Aparthotel Adagio Moscow Paveletskaya', 'Moskwa', '2019-10-12', '2019-10-18', '6 dni', 441);

INSERT INTO hotel VALUES(9, 'Domidea', 'Rzym', '2019-07-12', '2019-07-16', '4 dni', 426);
INSERT INTO hotel VALUES(10, 'Caravel', 'Rzym', '2019-07-12', '2019-07-16', '4 dni', 469);
INSERT INTO hotel VALUES(11, 'Trinity B&B', 'Rzym', '2019-07-12', '2019-07-16', '4 dni', 370);

INSERT INTO hotel VALUES(12, 'Kjarnalundur', 'Akureyri', '2019-09-22', '2019-10-01', '9 dni', 383);

INSERT INTO hotel VALUES(13, 'Arctic Comfort Hotel', 'Reykjavik', '2019-08-14', '2019-08-20', '6 dni', 611);

INSERT INTO hotel VALUES(14, 'Sheraton Tribeca', 'Nowy Jork', '2019-07-12', '2019-07-22', '10 dni', 611);
INSERT INTO hotel VALUES(15, 'Millenium Hilton', 'Nowy Jork', '2019-07-12', '2019-07-22', '10 dni', 687);
INSERT INTO hotel VALUES(16, 'Paramount Hotel', 'Nowy Jork', '2019-07-12', '2019-07-22', '10 dni', 676);

INSERT INTO hotel VALUES(17, 'BCN Urban Hotels', 'Barcelona', '2019-06-19', '2019-06-22', '3 dni', 403);
INSERT INTO hotel VALUES(18, 'Balmoral', 'Barcelona', '2019-06-19', '2019-06-22', '3 dni', 531);
INSERT INTO hotel VALUES(19, 'Exe Plaza Catalunya', 'Barcelona', '2019-06-19', '2019-06-22', '3 dni', 463);

INSERT INTO hotel VALUES(20, 'Song Hotel', 'Sydney', '2019-08-14', '2019-08-24', '10 dni', 343);
INSERT INTO hotel VALUES(21, 'The Ultimo', 'Sydney', '2019-08-14', '2019-08-24', '10 dni', 392);

INSERT INTO hotel VALUES(22, 'Sunroute', 'Hiroszima', '2019-06-07', '2019-06-20', '13 dni', 392);

INSERT INTO hotel VALUES(23, 'The Westbridge', 'Londyn', '2019-06-22', '2019-06-24', '2 dni', 473);
INSERT INTO hotel VALUES(24, 'The Blair Victoria', 'Londyn', '2019-06-22', '2019-06-24', '2 dni', 338);

INSERT INTO hotel VALUES(25, 'Northumberland Hotel', 'Edynburg', '2019-06-25', '2019-06-30', '5 dni', 250);



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
