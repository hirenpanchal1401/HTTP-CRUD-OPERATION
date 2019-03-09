import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NotifierModule} from 'angular-notifier';


import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    StateComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,NotifierModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
