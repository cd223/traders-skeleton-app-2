import { Component, OnInit } from '@angular/core';
import { EquityTrade } from '../equity-trade';
import { EquityTradeService } from '../equity-trade.service';

@Component({
  selector: 'app-equity-trade-view',
  templateUrl: './equity-trade-view.component.html',
  styleUrls: ['./equity-trade-view.component.css']
})
export class EquityTradeViewComponent implements OnInit {

  trades: EquityTrade[]

  constructor(private equityTradeService: EquityTradeService) { }

  ngOnInit(): void {
    this.trades = this.equityTradeService.getTrades();
  }

}
