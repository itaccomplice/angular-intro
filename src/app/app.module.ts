import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FirstFeatureModule } from './features/first-feature/first-feature.module';
import { StudentFeatureModule } from './features/student-feature/student-feature.module';
import { ServiceModule } from './service/service.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FirstFeatureModule,
    StudentFeatureModule,
    ServiceModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
