import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  isOneWay: boolean;
  isTwoWays: boolean;
  isMultiCity: boolean;

  constructor() {   }

  ngOnInit() {
  }

}
