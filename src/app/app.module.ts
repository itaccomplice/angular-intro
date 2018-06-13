import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstFeatureModule } from './features/first-feature/first-feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
