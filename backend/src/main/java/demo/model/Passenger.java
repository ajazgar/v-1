package demo.model;

public class Passenger {

    private int id;
    private String passengerName;
    private String surname;
    private String email;
    private boolean discount;

    public int getPassengerId() {
        return id;
    }

    public void setPassengerId(int id) {
        this.id = id;
    }

    public String getName() {
        return passengerName;
    }

    public void setName(String passengerName) {
        this.passengerName = passengerName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean getDiscount() {
        return discount;
    }

    public void setDiscount(boolean discount) {
        this.discount = discount;
    }

}
