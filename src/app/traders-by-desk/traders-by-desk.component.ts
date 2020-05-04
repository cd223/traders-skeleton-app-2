import { Component, OnInit, OnDestroy } from '@angular/core';
import { TraderService } from '../trader.service';
import { Trader } from '../trader';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-traders-by-desk',
  templateUrl: './traders-by-desk.component.html',
  styleUrls: ['./traders-by-desk.component.css']
})
export class TradersByDeskComponent implements OnInit, OnDestroy {

  filteredTraders: Trader[]
  subscription: Subscription

  constructor(private route: ActivatedRoute, 
    private traderService: TraderService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      p => {
        this.filteredTraders = this.traderService.getTraders().filter(
          t => t.desk == p['desk']
        )
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
