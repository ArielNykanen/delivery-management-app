import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { AdminsSectionComponent } from './views/admins-section/admins-section.component';
import { AllCustomersComponent } from './views/admins-section/all-customers/all-customers.component';
import { DashboardComponent } from './views/admins-section/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { MainPageComponent } from './views/customers-section/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'main', component: MainPageComponent
  },
  {path: 'admin', component: AdminsSectionComponent, children: [
  {
    path: 'all-customers', component: AllCustomersComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
