import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PurposeComponent } from './purpose/purpose.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AddPurposeComponent } from './add-purpose/add-purpose.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'purpose', component: PurposeComponent },
  { path: 'add-purpose', component: AddPurposeComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
