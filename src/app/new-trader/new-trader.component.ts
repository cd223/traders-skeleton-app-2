import { Component, OnInit } from '@angular/core';

import { Trader } from '../trader';
import { TraderService } from '../trader.service';

@Component({
  selector: 'app-new-trader',
  templateUrl: './new-trader.component.html',
  styleUrls: ['./new-trader.component.css']
})
export class NewTraderComponent implements OnInit {
  id: number = this.traderService.getFreshId();
  name: string = "";
  location: string = "";
  desk: string = "";
  desks: string[] = [
    'Equities', 'Cash', 'FX'
  ]

  constructor(private traderService: TraderService) { }

  addTrader() {
    let trader = new Trader(this.id, this.name, this.location, this.desk);
    this.traderService.addTrader(trader);
    this.id = this.traderService.getFreshId()
  }
  
  ngOnInit(): void {
  }
}
