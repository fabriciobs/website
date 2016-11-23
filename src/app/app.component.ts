import { Component } from '@angular/core';

import { SettingsService } from './commons/settings.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  perfil : any = {
      nome : "Fabricio",
      salario: "8500.94",
      dtNasc: new Date()
    };
    
  constructor(private settings : SettingsService){
  }
  
  changeLocale(newLocale:string){
    this.settings.setLocale(newLocale);
  }
}
