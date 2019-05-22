package demo.controller;

import demo.model.Passenger;
import demo.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/passengers")
public class PassengerController {

    @Autowired
    private PassengerService passengerService;

    @GetMapping
    public ResponseEntity<List<Passenger>> getAllPassengers() {
        List<Passenger> list = passengerService.getAllPassengers();
        return new ResponseEntity<List<Passenger>>(list, HttpStatus.OK);
    }

    @PostMapping("passenger")
    public ResponseEntity<Void> addPassenger(@RequestBody Passenger passenger, UriComponentsBuilder builder) {
        boolean flag = passengerService.addPassenger(passenger);
        if (flag == false) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/passenger/{id}").buildAndExpand(passenger.getPassengerId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
