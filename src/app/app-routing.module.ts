import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SightseeingComponent } from './core/sightseeing/sightseeing.component';
import { HomeComponent } from './core/home/home.component';
import { MapsPageComponent } from './core/maps-page/maps-page.component';
import { TimeTrialComponent } from './core/games/time-trial/time-trial.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'maps', component: MapsPageComponent },
  { path:'sightseeing', component: SightseeingComponent },
  { path:'game', children: [
    { path:'time-trial', component: TimeTrialComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
