import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
// import { NvD3Component } from 'ng2-nvd3';
import {ChartModule} from 'primeng/primeng';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent,
    // NvD3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
