import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  RouterStateSnapshot,  Router,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth-service/auth-service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInAuthGuard {
  constructor(public router: Router,
    public authService: AuthenticationService) {}

    canActivate(): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
        if (this.isLoggedIn) {
            return this.router.navigate(['admin/movies']);
        } else {
            return true
        }
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