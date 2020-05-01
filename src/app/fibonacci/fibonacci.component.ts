import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { scan, take, map } from 'rxjs/operators'

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const observable = interval(1000).pipe(take(10), scan((x,y) => x+y));
    const observable = interval(1000).pipe(
      take(10), 
      scan(x => [x[1], x[0] + x[1]], [0,1]), 
      map(v => v[0])
    );

    const fibonacciObserver = {
      next: v => console.log(v),
      error: err => console.log(err),
      complete: () => console.log('Done!')
    };

    observable.subscribe(fibonacciObserver)
  }

}

