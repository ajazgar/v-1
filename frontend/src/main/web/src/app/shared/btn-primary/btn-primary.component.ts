import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent implements OnInit {

  @Input() btnText: string;
  @Input() isBtnDisabled: boolean;
  @Input() flightID: number;
  @Input() hotelID: number;
  @Input() carID: number;

  constructor() { }

  ngOnInit() {
    console.log(this.flightID);
  }

}
