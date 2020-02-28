import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConversionResponse, Conversion } from '../models';
import { ConverterService } from '../services';

@Component({
  selector: 'modal-price',
  templateUrl: './modal-price.component.html',
  styleUrls: ['./modal-price.component.css']
})
export class ModalPriceComponent implements OnInit {

  @Input() id: string;
  @Input() conversionResponse: ConversionResponse;
  @Input() conversion: Conversion = new Conversion();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  newQuery() {
    this.onConfirm.emit();
  }

  get convertedValue(): string {
    if(this.conversionResponse === undefined) return '0';

    return (this.conversion.value * this.conversionResponse.rates[this.conversion.currencyDestination]).toFixed(2);
  }

  get priceTo(): number {
    return this.converterService.priceTo(this.conversionResponse, this.conversion);
  }

  get priceFrom(): string {
    return this.converterService.priceFrom(this.conversionResponse, this.conversion);
  }

  get priceDate(): string {
    return this.converterService.priceDate(this.conversionResponse);
  }
}
