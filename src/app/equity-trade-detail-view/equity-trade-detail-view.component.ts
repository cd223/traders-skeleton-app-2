import { Component, OnInit } from '@angular/core';
import { EquityTradeService } from '../equity-trade.service';
import { EquityTrade } from '../equity-trade';

@Component({
  selector: 'app-equity-trade-detail-view',
  templateUrl: './equity-trade-detail-view.component.html',
  styleUrls: ['./equity-trade-detail-view.component.css']
})
export class EquityTradeDetailViewComponent implements OnInit {

  trades: EquityTrade[]

  constructor(private equityTradeService: EquityTradeService) { }

  ngOnInit(): void {
    this.trades = this.equityTradeService.getTrades();
  }
}
