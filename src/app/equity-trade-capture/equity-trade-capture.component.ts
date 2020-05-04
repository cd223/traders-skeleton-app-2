import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EquityTradeService } from '../equity-trade.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraderService } from '../trader.service';
import { Trader } from '../trader';
import { EquityTrade } from '../equity-trade';

@Component({
  selector: 'app-equity-trade-capture',
  templateUrl: './equity-trade-capture.component.html',
  styleUrls: ['./equity-trade-capture.component.css']
})
export class EquityTradeCaptureComponent implements OnInit {

  traders: Trader[]
  trades: EquityTrade[]
  currencies: string[]
  errors: boolean = false;
  @Output() newTradeCompleted = new EventEmitter<number>()

  tradeIdFc = new FormControl(this.equityTradeService.getFreshId(), [Validators.required])
  symbolFc = new FormControl('',  [Validators.required, Validators.minLength(2), Validators.maxLength(4)])
  quantityFc = new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')])
  priceFc = new FormControl('', [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+\.[0-9]{2}$')])
  currencyFc = new FormControl(this.equityTradeService.getSupportedCurrencies()[0], [Validators.required])
  selectedTraderFc = new FormControl(this.traderService.getTraders()[0], [Validators.required, this.isEquitiesTrader])

  eqTradeFg: FormGroup = this.frmBuilder.group({
    tradeId: this.tradeIdFc,
    symbol: this.symbolFc,
    quantity: this.quantityFc,
    price: this.priceFc,
    currency: this.currencyFc,
    selectedTrader: this.selectedTraderFc
  })

  constructor(private equityTradeService: EquityTradeService,
              private traderService: TraderService,
              private frmBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.traders = this.traderService.getTraders();
    this.trades = this.equityTradeService.getTrades();
    this.currencies = this.equityTradeService.getSupportedCurrencies();
  }

  addTrade() {
    if (this.tradeIdFc.valid && this.symbolFc.valid && this.quantityFc.valid && this.priceFc.valid && this.currencyFc.valid && this.selectedTraderFc.valid) {
      let trade = new EquityTrade()
      trade.tradeId = this.tradeIdFc.value
      trade.symbol = this.symbolFc.value
      trade.quantity = this.quantityFc.value
      trade.price = this.priceFc.value
      trade.currency = this.currencyFc.value
      trade.selectedTrader = this.selectedTraderFc.value
      this.equityTradeService.addTrade(trade)
      this.newTradeCompleted.emit(this.trades.length)
      this.tradeIdFc.setValue(this.equityTradeService.getFreshId())
      this.errors = false;
    } else {
      this.errors = true;
    }
  }

  isEquitiesTrader(input: FormControl) {
    return input.value.desk == 'Equities' ? null : { isNotEquityTrader: true }
  }

}
