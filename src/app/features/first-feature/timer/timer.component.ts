import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() minutes: number;
  @Input() seconds: number;
  minCount: number;
  secCount: number;
  isPaused: boolean;
  buttonLabel: string;
  
  constructor(){

  }

  ngOnInit() {
    this.reset();
    setInterval(() => this.tick(), 1000);
  }

  private tick() {
    if(!this.isPaused) {
      this.buttonLabel = 'Pause';
      if(--this.secCount < 0) {
        this.secCount = 59;
        if(--this.minCount < 0) {
          this.reset();
        }
      }
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    // if countdown has started
    if (this.minCount < this.minutes || this.secCount !== this.seconds) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  reset() {
    this.minCount = this.minutes;
    this.secCount = this.seconds;
    this.buttonLabel = 'Start';
    this.togglePause();
  }
}
