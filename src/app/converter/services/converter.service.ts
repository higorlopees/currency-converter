import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Conversion, ConversionResponse } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly BASE_URL = 'http://data.fixer.io/api/latest?access_key=310d83662a5457f3e47ee91bcb5e59ac';

  constructor(private http: HttpClient) { }

  convert(conversion: Conversion): Observable<any> {
    let params = `&base=${conversion.currencySource}&symbols=${conversion.currencyDestination}`;
    return this.http
      .get(this.BASE_URL + params);
  }

  priceTo(conversionResponse: ConversionResponse, conversion: Conversion): number {
    if(conversionResponse === undefined) return 0;
    return conversionResponse.rates[conversion.currencyDestination];
  }

  priceFrom(conversionResponse: ConversionResponse, conversion: Conversion): string {
    if(conversionResponse === undefined) return '0';
    return (1 / conversionResponse.rates[conversion.currencyDestination]).toFixed(4);
  }

  priceDate(conversionResponse: ConversionResponse): string {
    if(conversionResponse === undefined) return '';
    return conversionResponse.date;
  }
}
