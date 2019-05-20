package demo.model;


//model class


public class Flight {

    private int flightId;
    private String departureCity;
    private String arrivalCity;
    private String departureDate;
    private String arrivalDate;
    private String flightClass;
    private String time;
    private double price;

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int id) {
        this.flightId = id;
    }

    public String getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(String departureCity) {
        this.departureCity = departureCity;
    }

    public String getArrivalCity() {
        return arrivalCity;
    }

    public void setArrivalCity(String arrivalCity) {
        this.arrivalCity = arrivalCity;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public String getArrivalDate() { return arrivalDate; }

    public void setArrivalDate(String arrivalDate) { this.arrivalDate = arrivalDate; }

    public String getFlightClass() {
        return flightClass;
    }

    public void setFlightClass(String flightClass) {
        this.flightClass = flightClass;
    }

    public String getTime() { return time; }

    public void setTime(String time) { this.time = time; }

    public double getPrice() { return price; }

    public void setPrice(double price) { this.price = price; }
}
