package demo.test;

import demo.model.Flight;
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

    public void addPassengerDemo() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/user/passenger";
        Passenger objPassenger = new Passenger();
        objPassenger.setName("Spring REST Security using Hibernate");
        objPassenger.setSurname("Spring");
        HttpEntity<Passenger> requestEntity = new HttpEntity<Passenger>(objPassenger, headers);
        URI uri = restTemplate.postForLocation(url, requestEntity);
        System.out.println(uri.getPath());
    }

    public static void main(String args[]) {
        RestClientUtil util = new RestClientUtil();
        util.addPassengerDemo();
        util.getFlightByIdDemo();
        util.getAllFlightsDemo();
    }
}
