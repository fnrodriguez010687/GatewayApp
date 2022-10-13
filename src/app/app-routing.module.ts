import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { GatewayDetailComponent } from './gateway-detail/gateway-detail.component';
import { GatewayComponent } from './gateway/gateway.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent/*,
canActivate:[AuthGuard]*/ },
  { path: 'detail/:SerialNumber', component: GatewayDetailComponent },
  { path: 'device/:UId', component: DeviceDetailComponent },

  { path: 'gateways', component: GatewayComponent/*,
canActivate:[AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
