import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tdf1Component } from './tdf1/tdf1.component';
import { FormsModule } from '@angular/forms';
import { Tdf2Component } from './tdf2/tdf2.component';
import { Tdf3Component } from './tdf3/tdf3.component';
import { Tdf4Component } from './tdf4/tdf4.component';
import { TdfValidaion1Component } from './tdf-validaion1/tdf-validaion1.component';

@NgModule({
  declarations: [
    AppComponent,
    Tdf1Component,
    Tdf2Component,
    Tdf3Component,
    Tdf4Component,
    TdfValidaion1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
