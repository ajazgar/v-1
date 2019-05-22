package demo.service;

import demo.jdbc.dao.PassengerDao;
import demo.model.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PassengerService {

    @Autowired
    PassengerDao passengerDao;

    public List<Passenger> getAllPassengers(){
        return passengerDao.getAllPassengers();
    }

    public boolean addPassenger(Passenger passenger) {
        passengerDao.addPassenger(passenger);
        return true;
    }
}
