import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbrComponent } from './components/navbr/navbr.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbr', component: NavbrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
