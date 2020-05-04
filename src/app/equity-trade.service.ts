import { Injectable } from '@angular/core';
import { EquityTrade } from './equity-trade';

@Injectable({
  providedIn: 'root'
})
export class EquityTradeService {

  idCount: number = 1
  
  private trades: EquityTrade[] = [
    { tradeId: 0,
      symbol: 'AAPL',
      quantity: 100,
      price: 140,
      currency: 'GBP',
      selectedTrader: { id: 0, name: 'John Doe', location: 'London', desk: 'Equities' } }
  ];
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
