import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';

const routes: Routes = [
  { path: 'first-component', component: MainPageComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
