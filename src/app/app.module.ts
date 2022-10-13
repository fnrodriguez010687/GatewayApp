import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GatewayComponent } from './gateway/gateway.component';
import { GatewayDetailComponent } from './gateway-detail/gateway-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './Services/authentication.service';
import { AuthGuard } from './auth.guard';
import { TokeInterceptorService } from './Services/toke-interceptor.service';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GatewayComponent,
    GatewayDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,    
    DeviceDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthenticationService, AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokeInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
