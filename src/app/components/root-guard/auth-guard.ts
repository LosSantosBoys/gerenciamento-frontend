import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  RouterStateSnapshot,  Router,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (!this.isLoggedIn) {
      window.alert('Acesso negado, é necessário estar logado para visualizar esta página!');
      this.router.navigate(['admin/login']);
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