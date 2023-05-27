import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/user/home-page/home-page.component';
import { LoginComponent } from './pages/user/auth/login/login.component';
import { RegisterComponent } from './pages/user/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/user/auth/forgot-password/forgot-password.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { SessionsComponent } from './pages/admin/sessions/sessions.component';
import { MoviePageComponent } from './pages/user/movie-page/movie-page.component';
import { SpecifySessionComponent } from './pages/admin/specify-session/specify-session.component';

const routes: Routes = [
  { 'path': 'login', component: LoginComponent },
  { 'path': 'register', component: RegisterComponent },
  { 'path': 'forgot-password', component: ForgotPasswordComponent },
  { 'path': 'admin/login', component: LoginAdminComponent },
  { 'path': 'admin/sessions', component: SessionsComponent },
  { 'path': 'movies/:id', component: MoviePageComponent, }
  { 'path': 'admin/session/:id', component: SpecifySessionComponent },
  { 'path': '', component: HomePageComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
