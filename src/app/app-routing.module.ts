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
import { AuthGuard } from './components/root-guard/auth-guard'
import { LoggedInAuthGuard } from './components/root-guard/logged-auth-guard'
import { LogoutConfirmationComponent } from './pages/logout-confirmation/logout-component'
import { EmployeeEditComponent } from './pages/admin/employee-edit/employee-edit.component'
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component'

const routes: Routes = [
  { 'path': 'login', component: LoginComponent },
  { 'path': 'register', component: RegisterComponent },
  { 'path': 'forgot-password', component: ForgotPasswordComponent },
  { 'path': 'movies/:id', component: MoviePageComponent },
  { 'path': 'admin/login', component: LoginAdminComponent, canActivate: [LoggedInAuthGuard] },
  { 'path': 'admin/logout', component: LogoutConfirmationComponent, canActivate: [AuthGuard] },
  { 'path': 'admin/sessions', component: SessionsComponent },
  { 'path': 'admin/session/:id', component: SpecifySessionComponent },
  { 'path': 'admin/movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { 'path': 'admin/movie/create', component: MovieCreateComponent },
  { 'path': 'admin/employees', component: EmployeesComponent, canActivate: [AuthGuard] },
  { 'path': 'admin/employee/create', component: EmployeeCreateComponent, canActivate: [AuthGuard] },
  { 'path': 'admin/employee/edit/:documento', component: EmployeeEditComponent, canActivate: [AuthGuard] },
  { 'path': 'admin/dashboard', component: DashboardComponent },
  { 'path': 'admin', redirectTo: '/admin/login' },
  { 'path': '', component: HomePageComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
