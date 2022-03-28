import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbrComponent } from './components/navbr/navbr.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbrComponent,
    HomeComponent,
    FooterComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
