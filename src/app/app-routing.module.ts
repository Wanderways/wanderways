import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './core/games/consultation/consultation.component';
import { InputAgainstTimeComponent } from './core/games/input-against-time/input-against-time.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { MapPageComponent } from './core/map-page/map-page.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'maps', component: MapPageComponent },
  { path: 'maps/$id', component: MapPageComponent },
  { path: 'maps/games/input-against-time', component: InputAgainstTimeComponent },
  { path: 'maps/games/consultation', component: ConsultationComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',  component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
