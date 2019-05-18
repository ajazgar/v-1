package demo.jdbc.dao;


import demo.jdbc.mapper.FlightRowMapper;
import demo.model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

//Dao class which will have implementation of jdbctemplate to insert rows in the db

@Repository
public class FlightDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public FlightDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Flight getFlightById(int id) {
        String sql = "SELECT id, departureCity, arrivalCity, departureDate, arrivalDate, flightClass, time, price FROM flight WHERE id = ?";
        RowMapper<Flight> rowMapper = new BeanPropertyRowMapper<Flight>(Flight.class);
        Flight flight = jdbcTemplate.queryForObject(sql, rowMapper, id);
        return flight;
    }

    public List<Flight> getAllFlights() {
        String sql = "SELECT id, departureCity, arrivalCity, departureDate, arrivalDate, flightClass, time, price FROM flight";
        //RowMapper<Article> rowMapper = new BeanPropertyRowMapper<Article>(Article.class);
        RowMapper<Flight> rowMapper = new FlightRowMapper();
        return this.jdbcTemplate.query(sql, rowMapper);
    }

}
