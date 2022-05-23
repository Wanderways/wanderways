import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './core/consultation/consultation.component';
import { HomeComponent } from './core/home/home.component';
import { MapsPageComponent } from './core/maps-page/maps-page.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'maps', component: MapsPageComponent },
  { path:'consultation', component: ConsultationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
