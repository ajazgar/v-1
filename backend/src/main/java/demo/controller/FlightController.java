package demo.controller;


import demo.model.Flight;
import demo.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping("flight/{id}")
    public ResponseEntity<Flight> getFlightById(@PathVariable("id") Integer id) {
        Flight flight = flightService.getFlightById(id);
        return new ResponseEntity<Flight>(flight, HttpStatus.OK);
    }

    @GetMapping("flights")
    public ResponseEntity<List<Flight>> getAllFlights() {
        List<Flight> list = flightService.getAllFlights();
        return new ResponseEntity<List<Flight>>(list, HttpStatus.OK);
    }
}
