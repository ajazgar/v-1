package demo.service;

import demo.jdbc.dao.HotelDao;
import demo.model.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {

    @Autowired
    HotelDao hotelDao;

    public Hotel getHotelById(int hotelId) {
        Hotel obj = hotelDao.getHotelById(hotelId);
        return obj;
    }

    public List<Hotel> getAllHotels(){

        return hotelDao.getAllHotels();
    }
}
