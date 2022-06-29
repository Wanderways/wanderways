import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SightseeingComponent } from './core/sightseeing/sightseeing.component';
import { HomeComponent } from './core/home/home.component';
import { MapsPageComponent } from './core/maps-page/maps-page.component';
import { AgainstTheClockComponent } from './core/games/against-the-clock/against-the-clock.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'maps', component: MapsPageComponent },
  { path:'sightseeing', component: SightseeingComponent },
  { path:'game', children: [
    { path:'against-the-clock', component: AgainstTheClockComponent }
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
