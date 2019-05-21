package demo.controller;

import demo.model.Passenger;
import demo.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/flights")
public class PassengerController {

    @Autowired
    private PassengerService passengerService;

    @PostMapping("passenger")
    public ResponseEntity<Void> addArticle(@RequestBody Passenger passenger, UriComponentsBuilder builder) {
        boolean flag = passengerService.addPassenger(passenger);
        if (flag == false) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/passenger/{id}").buildAndExpand(passenger.getPassengerId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
