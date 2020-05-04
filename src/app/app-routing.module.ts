import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraderComponent } from './trader/trader.component';
import { EquityTradeCaptureComponent } from './equity-trade-capture/equity-trade-capture.component';

const routes: Routes = [
  { path: '' , redirectTo: 'trader', pathMatch: 'full'},
  { path: 'trader' , component: TraderComponent},
  { path: 'trade' , component: EquityTradeCaptureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
