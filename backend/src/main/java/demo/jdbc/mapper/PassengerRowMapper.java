package demo.jdbc.mapper;


import demo.model.Passenger;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PassengerRowMapper implements RowMapper<Passenger> {

    @Override
    public Passenger mapRow(ResultSet row, int rowNum) throws SQLException {
        Passenger passenger = new Passenger();

        passenger.setPassengerId(row.getInt("id"));
        passenger.setName(row.getString("name"));
        passenger.setSurname(row.getString("surname"));
        passenger.setEmail(row.getString("email"));
        passenger.setDiscount(row.getBoolean("discount"));

        return passenger;
    }
}
