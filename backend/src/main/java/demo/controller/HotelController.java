package demo.controller;


import demo.model.Hotel;
import demo.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @GetMapping
    public ResponseEntity<List<Hotel>> getAllFlights() {
        List<Hotel> list = hotelService.getAllHotels();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping(path = "/{hotelId}")
    public ResponseEntity<Hotel> getHotelByCity(@PathVariable("hotelId") Integer hotelId) {
        Hotel hotel = hotelService.getHotelById(hotelId);
        return new ResponseEntity<Hotel>(hotel, HttpStatus.OK);
    }
}
