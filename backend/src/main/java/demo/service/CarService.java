package demo.service;

import demo.jdbc.dao.CarDao;
import demo.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    @Autowired
    CarDao carDao;

    public Car getCarById(int id) {
        Car obj = carDao.getCarById(id);
        return obj;
    }

    public List<Car> getAllCars(){
        return carDao.getAllCars();
    }
}
