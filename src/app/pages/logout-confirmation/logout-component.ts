import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'logout',
  templateUrl: './logout.html',
  styleUrls: ['./logout.css']
})

export class LogoutConfirmationComponent {

  constructor(private router: Router,
    private location: Location) { }

  confirmLogout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/admin/login']);
  }

  cancelLogout(): void {
    this.location.back();
  }
}
