import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private locale : string = 'pt-BR';

  constructor() {
  }

  getLocale(){
    return this.locale;
  }

  setLocale(_locale: string){
    this.locale = _locale;
    console.log('passei aqui');
  }
}
