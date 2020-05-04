import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraderComponent } from './trader/trader.component';
import { EquityTradeCaptureComponent } from './equity-trade-capture/equity-trade-capture.component';
import { EquityTradeViewComponent } from './equity-trade-view/equity-trade-view.component';
import { TraderViewComponent } from './trader-view/trader-view.component';
import { NewTraderComponent } from './new-trader/new-trader.component';
import { EquityTradeComponent } from './equity-trade/equity-trade.component';
import { EquityTradeDetailViewComponent } from './equity-trade-detail-view/equity-trade-detail-view.component';

const routes: Routes = [
  { path: '' , redirectTo: 'trader', pathMatch: 'full'},
  { path: 'trader' , component: TraderComponent, children: [
    {path: '', redirectTo: 'view', pathMatch: 'full'},
    {path: 'view', component: TraderViewComponent },
    {path: 'new', component: NewTraderComponent }
  ]},
  { path: 'trade' , component: EquityTradeComponent, children: [
    {path: '', redirectTo: 'view', pathMatch: 'full'},
    {path: 'view', component: EquityTradeViewComponent, children: [
      {path: '', redirectTo: 'detail/0', pathMatch: 'full'},
      {path: 'detail/:id', component: EquityTradeDetailViewComponent }
    ]},
    {path: 'new', component: EquityTradeCaptureComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
