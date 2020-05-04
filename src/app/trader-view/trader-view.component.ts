import { Component, OnInit } from '@angular/core';
import { TraderService } from '../trader.service';
import { Trader } from '../trader';

@Component({
  selector: 'app-trader-view',
  templateUrl: './trader-view.component.html',
  styleUrls: ['./trader-view.component.css']
})
export class TraderViewComponent implements OnInit {

  traders: Trader[]

  constructor(private traderService: TraderService) { }

  ngOnInit(): void {
    this.traders = this.traderService.getTraders()
  }

}
