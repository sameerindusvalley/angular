import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbrComponent } from './components/navbr/navbr.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ContactComponent } from './components/contact/contact.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { RegesterFormComponent } from './components/regester-form/regester-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbrComponent,
    HomeComponent,
    FooterComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    ContactComponent,
    LifeCycleHooksComponent,
    RegesterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
