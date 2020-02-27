import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencies: Currency[];

  constructor() { }

  private currenciesObj = [
    { "abbreviation": "AUD", "description": "Dólar australiano" },
    { "abbreviation": "BGN", "description": "Lev búlgaro" },
    { "abbreviation": "BRL", "description": "Real brasileiro" },
    { "abbreviation": "CAD", "description": "Dólar canadense" },
    { "abbreviation": "CHF", "description": "Franco suíço" },
    { "abbreviation": "CNY", "description": "Yuan Chinês" },
    { "abbreviation": "CZK", "description": "Coroa República Tcheca" },
    { "abbreviation": "DKK", "description": "Coroa dinamarquesa" },
    { "abbreviation": "EUR", "description": "Euro" },
    { "abbreviation": "GBP", "description": "Libra Esterlina" },
    { "abbreviation": "HKD", "description": "Dólar de Hong Kong" },
    { "abbreviation": "HRK", "description": "Coroa Croácia" },
    { "abbreviation": "HUF", "description": "Florim húngaro" },
    { "abbreviation": "IDR", "description": "Rupia indonésia" },
    { "abbreviation": "ILS", "description": "Novo shekel israelense" },
    { "abbreviation": "INR", "description": "Rupia indiana" },
    { "abbreviation": "JPY", "description": "Iene japonês" },
    { "abbreviation": "KRW", "description": "Won sul-coreano" },
    { "abbreviation": "MXN", "description": "Peso mexicano" },
    { "abbreviation": "MYR", "description": "Malásia Ringgit" },
    { "abbreviation": "NOK", "description": "Coroa Noruega" },
    { "abbreviation": "NZD", "description": "Dólar da Nova Zelândia" },
    { "abbreviation": "PHP", "description": "Peso filipino" },
    { "abbreviation": "PLN", "description": "Złoty Polónia" },
    { "abbreviation": "RON", "description": "Leu romeno" },
    { "abbreviation": "RUB", "description": "Belarus Ruble" },
    { "abbreviation": "SEK", "description": "Coroa Suécia" },
    { "abbreviation": "SGD", "description": "Dólar de Singapura" },
    { "abbreviation": "THB", "description": "Baht Tailândia" },
    { "abbreviation": "TRY", "description": "Lira turca" },
    { "abbreviation": "USD", "description": "Dólar dos Estados Unidos" }, 
    { "abbreviation": "ZAR", "description": "Rand África do Sul" }
  ];

  listAll(): Currency[] {
    if(this.currencies) return this.currencies;

    this.currencies = [];

    for(let currencyObj of this.currenciesObj){
      let currency = new Currency();
      Object.assign(currency, currencyObj);
      this.currencies.push(currency);
    }
  }
}
