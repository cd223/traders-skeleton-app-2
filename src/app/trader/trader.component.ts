import { Component, OnInit } from '@angular/core';
import { Trader } from '../trader';
import { TraderService } from '../trader.service';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {

  traders: Trader[];

  constructor(private traderService: TraderService) { }

  ngOnInit(): void {
    this.traders = this.traderService.getTraders();
  }

}
