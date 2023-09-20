import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'logout',
  templateUrl: './logout.html',
  styleUrls: ['./logout.css']
})

export class LogoutConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<LogoutConfirmationComponent>) { }

  confirmLogout(): void {
    this.dialogRef.close(true);
  }

  cancelLogout(): void {
    this.dialogRef.close(false);
  }
}