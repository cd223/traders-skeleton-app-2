import { Injectable } from '@angular/core';
import { Trader } from './trader';

@Injectable()
export class TraderService {

  idCount: number = 5

  private traders: Trader[] = [
    {id: 0, name: 'John Doe', location: 'London', desk: 'Equities' },
    {id: 1, name: 'Mark Walsh', location: 'New York', desk: 'Equities'},
    {id: 2, name: 'Mike Clarke', location: 'London', desk: 'Cash'},
    {id: 3, name: 'Ewan Smith', location: 'Hong Kong', desk: 'FX'},
    {id: 4, name: 'Richard Mackriell', location: 'Tokyo', desk: 'Equities'}
  ];

  constructor() { }

  getTraders(): Trader[] {
    return this.traders;
  }

  addTrader (trader: Trader){
    this.traders.push(trader);
    this.idCount++
  }

  getFreshId(){
    return this.idCount
  }
}
