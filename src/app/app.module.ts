import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderFbsComponent } from './header-fbs/header-fbs.component';
import { NavbarFbsComponent } from './navbar-fbs/navbar-fbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFbsComponent,
    NavbarFbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
