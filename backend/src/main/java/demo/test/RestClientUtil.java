package demo.test;

import demo.model.Car;
import demo.model.Flight;
import demo.model.Hotel;
import demo.model.Passenger;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

public class RestClientUtil {

    public void getFlightByIdDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/loty/flight/{flightId}";
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Flight> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, Flight.class, 1);
        Flight flight = responseEntity.getBody();
        System.out.println("Id:"+flight.getFlightId()+", Departure City:"+flight.getDepartureCity()+", Arrival City:"+flight.getArrivalCity()+", Departure Date:"+flight.getDepartureDate()+
                            ", Arrival Date:"+flight.getArrivalDate()+", Flight Class:"+flight.getFlightClass()+", Price:"+flight.getPrice()+", Time:"+flight.getTime());
    }

    public void getAllFlightsDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/loty/flights";
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Flight[]> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, Flight[].class);
        Flight[] flights = responseEntity.getBody();
        for(Flight flight : flights) {
            System.out.println("Id:"+flight.getFlightId()+", Departure City:"+flight.getDepartureCity()+", Arrival City:"+flight.getArrivalCity()+", Departure Date:"+flight.getDepartureDate()+
                    ", Arrival Date:"+flight.getArrivalDate()+", Flight Class:"+flight.getFlightClass()+", Price:"+flight.getPrice()+", Time:"+flight.getTime());
        }
    }

    public void getAllPassengersDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/loty/passengers";
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Passenger[]> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, Passenger[].class);
        Passenger[] passengers = responseEntity.getBody();
        for(Passenger passenger : passengers) {
            System.out.println("Id:"+passenger.getPassengerId()+", Name:"+passenger.getName()+", Surname:"+passenger.getSurname()+", Email: "+passenger.getEmail()+
                    ", Discount: "+passenger.getDiscount());
        }
    }

    public void addPassengerDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/passengers/{id}";
        Passenger objPassenger = new Passenger();
        objPassenger.setName("Spring REST Security using Hibernate");
        objPassenger.setSurname("Spring");
        HttpEntity<Passenger> requestEntity = new HttpEntity<Passenger>(objPassenger, headers);
        URI uri = restTemplate.postForLocation(url, requestEntity);
        System.out.println(uri.getPath());
    }


    public void getAllHotelsDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/hotels";
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Hotel[]> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, Hotel[].class);
        Hotel[] hotels = responseEntity.getBody();
        for(Hotel hotel : hotels) {
            System.out.println("Id:"+hotel.getHotelId()+", Name:"+hotel.getHotelName()+", City:"+hotel.getCity()+", First Date:"+hotel.getFirstDate()+
                    ", Sec Date:"+hotel.getSecDate()+", Time:"+hotel.getTime()+", Price:"+hotel.getPrice());
        }
    }

    public void getHotelByIdDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/hotels/{hotelId}";
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Hotel> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, Hotel.class, 1);
        Hotel hotel = responseEntity.getBody();
        System.out.println("Id:"+hotel.getHotelId()+", Name:"+hotel.getHotelName()+", City:"+hotel.getCity()+", First Date:"+hotel.getFirstDate()+
                ", Sec Date:"+hotel.getSecDate()+", Time:"+hotel.getTime()+", Price:"+hotel.getPrice());
    }

    public void getAllCarsDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/cars";
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Car[]> responseEntity = restTemplate.exchange(url, HttpMethod.GET, requestEntity, Car[].class);
        Car[] car = responseEntity.getBody();
//        for(Car car : cars) {
//            System.out.println("Id:"+car.getCarId()+", Name:"+car.getcarName()+", City:"+car.getCity()+", First Date:"+car.getFirstDate()+
//                    ", Sec Date:"+car.getSecDate()+", Time:"+car.getTime()+", Price:"+car.getPrice());
//        }
    }

    public static void main(String args[]) {
        RestClientUtil util = new RestClientUtil();
        util.getAllPassengersDemo();
        util.addPassengerDemo();
        util.getFlightByIdDemo();
        util.getAllFlightsDemo();
        util.getAllHotelsDemo();
        util.getHotelByIdDemo();
    }
}
