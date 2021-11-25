import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { MapPageComponent } from './core/map-page/map-page.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'maps', component: MapPageComponent },
  { path: 'maps/$id', component: MapPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',  component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
