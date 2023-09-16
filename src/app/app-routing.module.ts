import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './pages/user/home-page/home-page.component'
import { LoginComponent } from './pages/user/auth/login/login.component'
import { RegisterComponent } from './pages/user/auth/register/register.component'
import { ForgotPasswordComponent } from './pages/user/auth/forgot-password/forgot-password.component'
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component'
import { SessionsComponent } from './pages/admin/sessions/sessions.component'
import { MoviePageComponent } from './pages/user/movie-page/movie-page.component'
import { SpecifySessionComponent } from './pages/admin/specify-session/specify-session.component'
import { MoviesComponent } from './pages/admin/movies/movies.component'
import { MovieCreateComponent } from './pages/admin/movie-create/movie-create.component'
import { EmployeesComponent } from './pages/admin/employees/employees.component'
import { EmployeeCreateComponent } from './pages/admin/employee-create/employee-create.component'
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component'

const routes: Routes = [
  { 'path': 'login', component: LoginComponent },
  { 'path': 'register', component: RegisterComponent },
  { 'path': 'forgot-password', component: ForgotPasswordComponent },
  { 'path': 'movies/:id', component: MoviePageComponent },
  { 'path': 'admin/login', component: LoginAdminComponent },
  { 'path': 'admin/sessions', component: SessionsComponent },
  { 'path': 'admin/session/:id', component: SpecifySessionComponent },
  { 'path': 'admin/movies', component: MoviesComponent },
  { 'path': 'admin/movie/create', component: MovieCreateComponent },
  { 'path': 'admin/employees', component: EmployeesComponent },
  { 'path': 'admin/employee/create', component: EmployeeCreateComponent },
  { 'path': 'admin/dashboard', component: DashboardComponent },
  { 'path': 'admin', redirectTo: '/admin/login' },
  { 'path': '', component: HomePageComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
