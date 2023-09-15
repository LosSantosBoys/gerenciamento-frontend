import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  RouterStateSnapshot,  Router,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth-service/auth-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public router: Router,
    public authService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (!this.isLoggedIn) {
      window.alert('Acesso negado, é necessário estar logado para visualizar esta página!');
      this.router.navigate(['admin/login']);
    }

    else if (this.authService.isTokenExpired()) {
      //this.authService.logout(); // Método para fazer logout
      window.alert('Sessão expirada. Por favor, realize o login novamente.');
      return this.router.createUrlTree(['admin/login']);
    }

    return true;
  }
  
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser')!);
    if (user == null) {
      return false;
    } else {
      return true;
    }
  }
}