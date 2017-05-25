import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderFbsComponent } from './header-fbs/header-fbs.component';
import { NavbarFbsComponent } from './navbar-fbs/navbar-fbs.component';
import { ProfileFbsComponent } from './profile-fbs/profile-fbs.component';
import { ExpProfFbsComponent } from './exp-prof-fbs/exp-prof-fbs.component';
import { EducCursoFbsComponent } from './educ-curso-fbs/educ-curso-fbs.component';
import { LinguaFbsComponent } from './lingua-fbs/lingua-fbs.component';
import { CompetTecFbsComponent } from './compet-tec-fbs/compet-tec-fbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFbsComponent,
    NavbarFbsComponent,
    ProfileFbsComponent,
    ExpProfFbsComponent,
    EducCursoFbsComponent,
    LinguaFbsComponent,
    CompetTecFbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
