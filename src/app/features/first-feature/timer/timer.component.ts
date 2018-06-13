import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minutes: number;
  seconds: number;

  constructor(){
    this.minutes = 24;
    this.seconds = 59;
    setInterval(() => this.tick(), 1000);
  }

  ngOnInit() {
  }

  tick() {
    if(--this.seconds < 0) {
      this.seconds = 59;
      if(--this.minutes < 0) {
        this.minutes = 24;
        this.seconds = 59;
      }
    }
  }
}
