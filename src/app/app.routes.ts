import { TimerPageComponent } from './features/first-feature/timer-page/timer-page.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'timer-page', pathMatch: 'full' },
  {path: 'timer-page', component: TimerPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);