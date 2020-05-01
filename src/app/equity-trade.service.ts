import { Injectable } from '@angular/core';
import { EquityTrade } from './equity-trade';

@Injectable({
  providedIn: 'root'
})
export class EquityTradeService {

  idCount: number = 1
  
  private trades: EquityTrade[] = [];
  private supportedCurrencies: string[] = ['USD', 'EUR', 'CRC', 'GBP', 'JPY', 'BTC'] 

  constructor() { }

  getTrades(): EquityTrade[] {
    return this.trades;
  }

  addTrade(trade: EquityTrade){
    this.trades.push(trade);
    this.idCount++
  }

  getFreshId(){
    return this.idCount
  }

  getSupportedCurrencies() {
    return this.supportedCurrencies;
  }
}
