import { Component, OnInit } from '@angular/core';
import {HotelsService} from "../../shared/services/hotels.service";
import {Hotel} from "../../models/hotel.model";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
  providers: [HotelsService]
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[];
  filteredHotels: Hotel[];

  isHotelChosen: number;
  disableButton: boolean = true;

  private _searchText: string = "";

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
    this.filteredHotels = this.filterHotels(value);
  }

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHotels().subscribe(data => {
      this.hotels = data;
      this.filteredHotels = this.hotels;
    });
  }

  filterHotels(searchString: string) {
    return this.hotels.filter(hotel => hotel.city.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  chooseHotel(index) {
    this.isHotelChosen = index;
    this.disableButton = false;
  }

}
