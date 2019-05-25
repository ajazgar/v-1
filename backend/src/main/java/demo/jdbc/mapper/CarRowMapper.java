package demo.jdbc.mapper;



import demo.model.Car;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CarRowMapper implements RowMapper<Car> {

    @Override
    public Car mapRow(ResultSet row, int rowNum) throws SQLException {
        Car car = new Car();

        car.setCarId(row.getInt("id"));
        car.setCarBrand(row.getString("carBrand"));
        car.setDescription(row.getString("description"));
        car.setPlace(row.getString("place"));
        car.setReceivingDate(row.getString("receivingDate"));
        car.setReturnDate(row.getString("returnDate"));
        car.setPrice(row.getDouble("price"));

        return car;
    }
}
