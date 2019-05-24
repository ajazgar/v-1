package demo.jdbc.dao;

import demo.jdbc.mapper.HotelRowMapper;
import demo.model.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HotelDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public HotelDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Hotel> getAllHotels() {
        String sql = "SELECT * FROM hotel";
        //RowMapper<Article> rowMapper = new BeanPropertyRowMapper<Article>(Article.class);
        RowMapper<Hotel> rowMapper = new HotelRowMapper();
        return this.jdbcTemplate.query(sql, rowMapper);
    }

    public List<Hotel> getHotelByCity(String city) {
        String sql = "SELECT * FROM hotel WHERE city = ?";
//        RowMapper<Hotel> rowMapper = new BeanPropertyRowMapper<Hotel>(Hotel.class);
        RowMapper<Hotel> rowMapper = new HotelRowMapper();
        return this.jdbcTemplate.query(sql, rowMapper, city);
    }
}
