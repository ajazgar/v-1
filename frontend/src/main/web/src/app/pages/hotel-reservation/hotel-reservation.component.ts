import { Component, OnInit } from '@angular/core';
import {HotelsService} from "../../shared/services/hotels.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hotel-reservation',
  templateUrl: './hotel-reservation.component.html',
  styleUrls: ['./hotel-reservation.component.scss'],
  providers: [HotelsService]
})
export class HotelReservationComponent implements OnInit {

  id: number;
  hotelName: string;
  city: string;
  firstDate: string;
  secDate: string;
  time: string;
  price: string;

  constructor(private hotelService: HotelsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.hotelService.getHotelById(this.id).subscribe(data => {
      this.id = data.hotelId;
      this.hotelName = data.hotelName;
      this.city = data.city;
      this.firstDate = data.firstDate;
      this.secDate = data.secDate;
      this.time = data.time;
      this.price = data.price;
      console.log(this.id);
    });
  }

}
