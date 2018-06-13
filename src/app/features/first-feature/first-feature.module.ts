import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimerPageComponent } from './timer-page/timer-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimerComponent, TimerPageComponent],
  exports: [TimerComponent]
})
export class FirstFeatureModule { }
