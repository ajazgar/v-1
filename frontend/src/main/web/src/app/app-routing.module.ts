import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './pages/hotels/hotels.component';
import {CarsComponent} from './pages/cars/cars.component';
import {DiscoverComponent} from './pages/discover/discover.component';
import {FlightsComponent} from './pages/flights/flights.component';
import {ResultTableComponent} from './shared/result-table/result-table.component';
import {ReservationComponent} from "./shared/reservation/reservation.component";
import {BookingComponent} from "./pages/booking/booking.component";
import {ConfirmationComponent} from "./shared/confirmation/confirmation.component";
import {ArticleComponent} from "./pages/article/article.component";

const routes: Routes = [
    {path: '', redirectTo: '/loty', pathMatch: 'full'},
    {path: 'loty', component: FlightsComponent},
    {path: 'hotele', component: HotelsComponent},
    {path: 'samochody', component: CarsComponent},
    {path: 'discover', component: DiscoverComponent},
    {path: 'loty/recommended/:countries/:id', component: ResultTableComponent},
    {path: 'loty/rezerwacja/:id', component: ReservationComponent},
    {path: 'hotele/rezerwacja/:hotelId', component: ReservationComponent},
    {path: 'loty/booking/:id', component: BookingComponent},
    {path: 'hotele/booking/:hotelId', component: BookingComponent},
    {path: 'samochody/booking/:carId', component: BookingComponent},
    {path: 'loty/booking/confirmation/:id', component: ConfirmationComponent},
    {path: 'hotele/booking/confirmation/:hotelId', component: ConfirmationComponent},
    {path: 'samochody/booking/confirmation/:carId', component: ConfirmationComponent},
    {path: 'artykul/:articleTitle', component: ArticleComponent},
    {path: 'samochody/rezerwacja/:carId', component: ReservationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
