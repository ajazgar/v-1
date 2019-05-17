import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './pages/hotels/hotels.component';
import {CarsComponent} from './pages/cars/cars.component';
import {DiscoverComponent} from './pages/discover/discover.component';
import {AppComponent} from './app.component';
import {FlightsComponent} from './pages/flights/flights.component';
import {ResultTableComponent} from './shared/result-table/result-table.component';

const routes: Routes = [
    {path: '', redirectTo: '/loty', pathMatch: 'full'},
    {path: 'loty', component: FlightsComponent},
    {path: 'hotele', component: HotelsComponent},
    {path: 'samochody', component: CarsComponent},
    {path: 'discover', component: DiscoverComponent},
    {path: 'loty/recommended', component: ResultTableComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
