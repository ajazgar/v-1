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

  private _searchText: string = "";
  selected_count: number = 0;

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
    this.filteredHotels = this.filterHotels(value);
  }

  filterHotels(searchString: string) {
    return this.hotels.filter(hotel => hotel.city.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHotels().subscribe(data => {
      this.hotels = data;
    });
    this.filteredHotels = this.hotels;
  }

  //Clear term types by user
  clearFilter() {
    this._searchText = "";
  }

}
