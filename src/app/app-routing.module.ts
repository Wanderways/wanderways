import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'maps', component: MainPageComponent },
  { path: 'maps/$id', component: MainPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',  component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
