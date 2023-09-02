import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  sucesso(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000, // Tempo em milissegundos
      panelClass: ['success-snackbar']
    });
  }

  falha(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }
}