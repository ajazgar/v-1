package demo.model;


//model class


public class Flight {

    private int id;
    private String departureCity;
    private String arrivalCity;
    private String departureDate;
    private String arrivalDate;
    private String flightClass;
    private float price;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public float getPrice() { return price; }

    public void setPrice(float price) { this.price = price; }
}
