package demo.jdbc.mapper;


import demo.model.Flight;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FlightRowMapper implements RowMapper<Flight> {

    @Override
    public Flight mapRow(ResultSet row, int rowNum) throws SQLException {
        Flight flight = new Flight();

        flight.setFlightId(row.getInt("id"));
        flight.setDepartureCity(row.getString("departureCity"));
        flight.setArrivalCity(row.getString("arrivalCity"));
        flight.setDepartureDate(row.getString("departureDate"));
        flight.setArrivalDate(row.getString("arrivalDate"));
        flight.setFlightClass(row.getString("flightClass"));
        flight.setTime(row.getString("time"));
        flight.setPrice(row.getFloat("price"));

        return flight;
    }
}
