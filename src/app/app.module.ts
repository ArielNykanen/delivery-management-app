import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsSectionComponent } from './views/admins-section/admins-section.component';
import { DashboardComponent } from './views/admins-section/dashboard/dashboard.component';
import { AllCustomersComponent } from './views/admins-section/all-customers/all-customers.component';
import { MainPageComponent } from './views/customers-section/main-page/main-page.component';
import { CustomersSectionComponent } from './views/customers-section/customers-section.component';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginServices } from './services/login-services/login.services.ts.component';
import { AnimationServices } from './services/animation-services/animation.services';
import { NavigationServices } from './services/navigation-services/navigation.services';
import { AuthService } from './services/auth-services/auth.services';
import { DeliveryServices } from './services/delivery-services/delivery.services';
import { AlertServices } from './services/alert-services/alert.services';
import { AreaServices } from './services/area-services/area.services';

@NgModule({
  declarations: [
    AppComponent,
    AdminsSectionComponent,
    DashboardComponent,
    AllCustomersComponent,
    MainPageComponent,
    CustomersSectionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoginServices,
    AnimationServices,
    NavigationServices,
    AuthService,
    DeliveryServices,
    AlertServices,
    AreaServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
