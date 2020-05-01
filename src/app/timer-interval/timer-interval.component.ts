import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-timer-interval',
  templateUrl: './timer-interval.component.html',
  styleUrls: ['./timer-interval.component.css']
})
export class TimerIntervalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const intervalObservable = interval(1000)
    intervalObservable.subscribe(
      val => console.log(val)
    )

    const timerObservable = timer(1000)
    timerObservable.subscribe(
      val => console.log(val)
    )
  }

}

