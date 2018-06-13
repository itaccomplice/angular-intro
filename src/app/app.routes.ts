import { TimerPageComponent } from './features/first-feature/timer-page/timer-page.component';
import { StudentsComponent } from './features/student-feature/students/students.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'timer-page', pathMatch: 'full' },
  {path: 'timer-page', component: TimerPageComponent },
  {path: 'students', component: StudentsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);