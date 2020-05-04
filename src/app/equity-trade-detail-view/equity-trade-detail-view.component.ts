import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquityTradeService } from '../equity-trade.service';
import { EquityTrade } from '../equity-trade';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equity-trade-detail-view',
  templateUrl: './equity-trade-detail-view.component.html',
  styleUrls: ['./equity-trade-detail-view.component.css']
})
export class EquityTradeDetailViewComponent implements OnInit, OnDestroy {

  trades: EquityTrade[]
  trade: EquityTrade
  subscription: Subscription
  
  constructor(private route: ActivatedRoute, 
    private equityTradeService: EquityTradeService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      p => {
        this.trades = this.equityTradeService.getTrades();
        this.trade = this.trades[Number(p['id'])]
      } 
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
