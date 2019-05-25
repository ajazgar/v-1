package demo.jdbc.dao;



import demo.jdbc.mapper.CarRowMapper;
import demo.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

//Dao class which will have implementation of jdbctemplate to insert rows in the db

@Repository
public class CarDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public CarDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Car getCarById(int carId) {
        String sql = "SELECT * FROM car WHERE id = ?";
//        RowMapper<Car> rowMapper = new BeanPropertyRowMapper<Car>(Car.class);
        RowMapper<Car> rowMapper = new CarRowMapper();
        Car Car = jdbcTemplate.queryForObject(sql, rowMapper, carId);
        return Car;
    }

    public List<Car> getAllCars() {
        String sql = "SELECT * FROM car";
        //RowMapper<Article> rowMapper = new BeanPropertyRowMapper<Article>(Article.class);
        RowMapper<Car> rowMapper = new CarRowMapper();
        return this.jdbcTemplate.query(sql, rowMapper);
    }

}
