import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './shared/search/search.component';
import { BtnPrimaryComponent } from './shared/btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from './shared/btn-secondary/btn-secondary.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModalComponent } from './shared/modal/modal.component';
import { RecommendationsComponent } from './shared/recommendations/recommendations.component';
import { ResultTableComponent } from './shared/result-table/result-table.component';
import { ReviewsComponent } from './shared/reviews/reviews.component';
import { StepperComponent } from './shared/stepper/stepper.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CarsComponent } from './pages/cars/cars.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BsDropdownModule, ModalModule, TooltipModule} from "ngx-bootstrap";
import { ReservationComponent } from './shared/reservation/reservation.component';
import { BookingComponent } from './pages/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    DropdownComponent,
    FooterComponent,
    ModalComponent,
    RecommendationsComponent,
    ResultTableComponent,
    ReviewsComponent,
    StepperComponent,
    NavBarComponent,
    CarsComponent,
    HotelsComponent,
    FlightsComponent,
    DiscoverComponent,
    ReservationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
