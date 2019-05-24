package demo.model;

public class Hotel {

    private int id;
    private String hotelName;
    private String city;
    private String firstDate;
    private String secDate;
    private String time;
    private double price;


    public int getHotelId() {
        return id;
    }

    public void setHotelId(int id) {
        this.id = id;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setFirstDate(String firstDate) {
        this.firstDate = firstDate;
    }

    public String getFirstDate() {
        return firstDate;
    }

    public String getSecDate() {
        return secDate;
    }

    public void setSecDate(String secDate) {
        this.secDate = secDate;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
