package demo.service;

import demo.jdbc.dao.PassengerDao;
import demo.model.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PassengerService {

    @Autowired
    PassengerDao passengerDao;

    public void addPassenger(Passenger passenger) {
        passengerDao.addPassenger(passenger);
    }
}
