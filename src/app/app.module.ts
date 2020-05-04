import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTraderComponent } from './new-trader/new-trader.component';
import { TraderService } from './trader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquityTradeCaptureComponent } from './equity-trade-capture/equity-trade-capture.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { TraderComponent } from './trader/trader.component';
import { AboutComponent } from './about/about.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { PersonComponent } from './person/person.component';
import { InputBoxDirective } from './input-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewTraderComponent,
    EquityTradeCaptureComponent,
    CustomCurrencyPipe,
    TraderComponent,
    AboutComponent,
    PersonComponent,
    FibonacciComponent,
    TimerIntervalComponent,
    InputBoxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  ],
  providers: [TraderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
