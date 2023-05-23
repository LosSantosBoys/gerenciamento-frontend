import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/user/auth/login/login.component';
import { RegisterComponent } from './pages/user/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/user/auth/forgot-password/forgot-password.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';

const routes: Routes = [
  { 'path': 'login', component: LoginComponent },
  { 'path': 'register', component: RegisterComponent },
  { 'path': 'forgot-password', component: ForgotPasswordComponent },
  { 'path': 'admin/login', component: LoginAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
