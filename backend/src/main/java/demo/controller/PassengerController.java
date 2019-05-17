package demo.controller;

import demo.model.Passenger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.util.UriComponentsBuilder;

public class PassengerController {

    @PostMapping("passenger")
    public ResponseEntity<Void> addArticle(@RequestBody Passenger passenger, UriComponentsBuilder builder) {
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/passenger/{id}").buildAndExpand(passenger.getPassengerId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
