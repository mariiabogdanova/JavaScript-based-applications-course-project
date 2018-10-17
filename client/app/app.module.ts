import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [AppComponent, TodosComponent],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
