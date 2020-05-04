import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Output() newDateDetected = new EventEmitter<Date>()

  constructor() { }

  ngOnInit(): void {
    this.newDateDetected.emit(new Date())
  }

}
