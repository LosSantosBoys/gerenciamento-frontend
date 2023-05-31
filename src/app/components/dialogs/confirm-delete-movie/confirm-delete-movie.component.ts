import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  id: number
}

@Component({
  selector: 'app-confirm-delete-movie',
  templateUrl: './confirm-delete-movie.component.html',
  styleUrls: ['./confirm-delete-movie.component.css']
})

export class ConfirmDeleteMovieComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close()
  }
}
