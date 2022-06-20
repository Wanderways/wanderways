import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SightseeingComponent } from './core/sightseeing/sightseeing.component';
import { HomeComponent } from './core/home/home.component';
import { MapsPageComponent } from './core/maps-page/maps-page.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'maps', component: MapsPageComponent },
  { path:'sightseeing', component: SightseeingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
