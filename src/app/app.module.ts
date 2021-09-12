import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPurposeComponent } from './add-purpose/add-purpose.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainComponent } from './main/main.component';
import { PurposeComponent } from './purpose/purpose.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddPurposeComponent,
    AuthorizationComponent,
    MainComponent,
    PurposeComponent,
    RegistrationComponent,
    StatisticsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
