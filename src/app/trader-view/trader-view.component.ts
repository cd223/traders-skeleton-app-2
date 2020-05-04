import { Component, OnInit } from '@angular/core';
import { TraderService } from '../trader.service';
import { Trader } from '../trader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trader-view',
  templateUrl: './trader-view.component.html',
  styleUrls: ['./trader-view.component.css']
})
export class TraderViewComponent implements OnInit {

  traders: Trader[]
  desk: string = "";
  desks: string[] = [
    "Equities", "Cash", "FX"
  ]

  constructor(private traderService: TraderService, private router: Router) { }

  ngOnInit(): void {
    this.traders = this.traderService.getTraders()
  }

  onDeskChange(event: any) {
    let deskName = event.target.value
    this.router.navigateByUrl('/trader/view/desk/' + deskName)
  }

}
