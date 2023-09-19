import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user/auth/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/user/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MovieRowComponent } from './components/movie-row/movie-row.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ForgotPasswordComponent } from './pages/user/auth/forgot-password/forgot-password.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { SessionsComponent } from './pages/admin/sessions/sessions.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { BtnOpenAsideComponent } from './components/btn-open-aside/btn-open-aside.component';
import { MoviePageComponent } from './pages/user/movie-page/movie-page.component';
import { ApiService } from './service/api-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SafePipe } from './components/safe-pipe/safe-pipe.component';
import { SpecifySessionComponent } from './pages/admin/specify-session/specify-session.component';
import { CardInfoSpecifySessionComponent } from './components/card-info-specify-session/card-info-specify-session.component';
import { MoviesComponent } from './pages/admin/movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MovieCreateComponent } from './pages/admin/movie-create/movie-create.component';
import { ConfirmDeleteMovieComponent } from './components/dialogs/confirm-delete-movie/confirm-delete-movie.component';
import { EmployeesComponent } from './pages/admin/employees/employees.component';
import { EmployeeCreateComponent } from './pages/admin/employee-create/employee-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './components/snackbar/snackbar';
import { HttpLoggingInterceptor } from './components/utils/http-logging-interceptor';
import { HasRoleDirective } from './components/has-role-directive/has-role-directive';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false, // Desativa a validação automática
};


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    MovieRowComponent,
    BannerSliderComponent,
    ForgotPasswordComponent,
    LoginAdminComponent,
    SessionsComponent,
    SessionItemComponent,
    AsideNavComponent,
    BtnOpenAsideComponent,
    MoviePageComponent,
    SafePipe,
    SpecifySessionComponent,
    CardInfoSpecifySessionComponent,
    MoviesComponent,
    MovieCreateComponent,
    ConfirmDeleteMovieComponent,
    EmployeesComponent,
    EmployeeCreateComponent,
    HasRoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCommonModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatButtonToggleModule,
    NgxMaskModule.forRoot(maskConfig),
    ],
  providers: [
    ApiService,
    SnackbarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoggingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }