import { Component, OnInit } from '@angular/core';
import { Trader } from '../trader';
import { TraderService } from '../trader.service';
import { ZoneWatcherService } from '../zone-watcher.service';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {

  constructor(private traderService: TraderService,
    private zoneWatcherService: ZoneWatcherService) { }

  ngOnInit(): void {
  }

}
