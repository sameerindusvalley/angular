import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbrComponent } from './components/navbr/navbr.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { RegesterFormComponent } from './components/regester-form/regester-form.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbr', component: NavbrComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'templatedriven', component:TemplatedrivenComponent },
  { path: 'reactive', component:ReactiveComponent },
  { path: 'life-cycle-hooks', component:LifeCycleHooksComponent },
  { path: 'login', component:LoginFormComponent },
  { path: 'regester-form', component:RegesterFormComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
