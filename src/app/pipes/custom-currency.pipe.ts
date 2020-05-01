import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    let currencyMap: Map<string, string> = new Map();
    currencyMap.set('USD', '$');
    currencyMap.set('EUR', '€');
    currencyMap.set('CRC', '₡');
    currencyMap.set('GBP', '£');
    currencyMap.set('JPY', '¥');
    currencyMap.set('BTC', '₿');

    if (currencyMap.has(currency)) return currencyMap.get(currency) + value.toFixed(2)
    return currency + ' ' + value.toFixed(2);
  }

}
