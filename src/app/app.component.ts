import { Component, OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked  {
  title = 'traders';
  numberOfTradesCompleted: number = 0

  constructor() {}

  onNewTradeCompleted(numberOfTrades: number) {
    this.numberOfTradesCompleted = numberOfTrades;
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called' + changes)
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }
  ngOnInit(): void {
    console.log('ngAfterCngOnInitontentChecked called')
  }
}
