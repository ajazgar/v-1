package demo.service;

import demo.jdbc.dao.FlightDao;
import demo.model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {

    @Autowired
    FlightDao flightDao;

    public Flight getFlightById(int flightId) {
        Flight obj = flightDao.getFlightById(flightId);
        return obj;
    }

    public List<Flight> getAllFlights(){
        return flightDao.getAllFlights();
    }
}
