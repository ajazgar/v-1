package demo.jdbc.dao;


import demo.jdbc.mapper.PassengerRowMapper;
import demo.model.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

//Dao class which will have implementation of jdbctemplate to insert rows in the db

@Repository
public class PassengerDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public PassengerDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Passenger getPassengerById(int passengerId) {
        String sql = "SELECT id, name, surname, email, discount FROM passenger WHERE id = ?";
        RowMapper<Passenger> rowMapper = new BeanPropertyRowMapper<Passenger>(Passenger.class);
        Passenger passenger = jdbcTemplate.queryForObject(sql, rowMapper, passengerId);
        return passenger;
    }

    public List<Passenger> getAllPassengers() {
        String sql = "SELECT id, name, surname, email FROM flight";
        //RowMapper<Article> rowMapper = new BeanPropertyRowMapper<Article>(Article.class);
        RowMapper<Passenger> rowMapper = new PassengerRowMapper();
        return this.jdbcTemplate.query(sql, rowMapper);
    }

    public void addPassenger(Passenger passenger) {
        String sql = "INSERT INTO passenger VALUES (?, ?, ?, ?)";

        jdbcTemplate.update(sql, passenger.getPassengerId(), passenger.getName(), passenger.getSurname(), passenger.getEmail());

        sql = "SELECT id FROM passenger WHERE name = ? and surname = ?";
        int id = jdbcTemplate.queryForObject(sql, Integer.class, passenger.getName(), passenger.getSurname());

        passenger.setPassengerId(id);
    }

}
