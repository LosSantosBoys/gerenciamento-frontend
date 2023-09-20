import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../auth-service/auth-service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmationComponent } from 'src/app/pages/logout-confirmation/logout-component';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})

export class AsideNavComponent {
  cssClass: string = 'aside_wrapper';
  sub: string | null;
  name: string | null;

  constructor(public authService: AuthenticationService,
    private router: Router,
    private dialog: MatDialog) {
    this.sub = this.authService.getSubFromToken();
    this.name = this.authService.getNameFromToken();
  }

  @Input() status: boolean = false
  @Output() closedAside: EventEmitter<void> = new EventEmitter<void>()

  ngOnChanges(): void {
    if (this.status) {
      this.cssClass = 'aside_open aside_wrapper'
      return
    }

    this.cssClass = 'aside_wrapper'
  }

  closeAside(): void {
    this.closedAside.emit()
  }

  openLogoutConfirmationDialog(): void {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/admin/login']);
      }
    });
  }
}
