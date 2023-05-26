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
import { MovieTicketPageComponent } from './pages/user/movie-ticket-page/movie-ticket-page.component';
import { ApiService } from './service/api-service';
import { HttpClientModule } from '@angular/common/http';

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
    MovieTicketPageComponent
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
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
