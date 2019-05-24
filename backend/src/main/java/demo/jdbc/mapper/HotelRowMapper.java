package demo.jdbc.mapper;

import demo.model.Hotel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class HotelRowMapper implements RowMapper<Hotel> {

    @Override
    public Hotel mapRow(ResultSet row, int rowNum) throws SQLException {
        Hotel hotel = new Hotel();

        hotel.setHotelId(row.getInt("id"));
        hotel.setHotelName(row.getString("hotelName"));
        hotel.setCity(row.getString("city"));
        hotel.setFirstDate(row.getString("firstDate"));
        hotel.setSecDate(row.getString("secDate"));
        hotel.setTime(row.getString("time"));
        hotel.setPrice(row.getDouble("price"));

        return hotel;
    }
}
