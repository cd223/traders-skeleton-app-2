import { Component, OnInit } from '@angular/core';
import { ZoneWatcherService } from '../zone-watcher.service';

@Component({
  selector: 'app-equity-trade',
  templateUrl: './equity-trade.component.html',
  styleUrls: ['./equity-trade.component.css']
})
export class EquityTradeComponent implements OnInit {

  constructor(private zoneWatcherService: ZoneWatcherService) { }

  ngOnInit(): void {
  }

}
