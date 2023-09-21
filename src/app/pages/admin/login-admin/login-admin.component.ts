import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api-service';
import { SnackbarService } from 'src/app/components/snackbar/snackbar';
import { LoginDto } from 'src/app/models/autenticacao/login-request';
import { LoginResponse } from 'src/app/models/autenticacao/login-response';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css', '../../../styles/authentication.css']
})

export class LoginAdminComponent {
  asideStatus: boolean = false

  login: LoginDto = {
    username: '',
    senha: ''
  };

  constructor(
    private apiService: ApiService,
    private snackbarService: SnackbarService,
    private router: Router
    ) {
    this.asideStatus = false
  }

  onSubmit(form: NgForm): void {
    if (form.valid){
      this.apiService.efetuarLogin(this.login).subscribe({
        next: (response: LoginResponse) => {
          const token = response.token;
          localStorage.setItem('currentUser', JSON.stringify({ token: token, name: name }));
        },
        error: (error) => {
          this.snackbarService.falha("Dados inconsistentes.");
        },
        complete: () => {
          this.snackbarService.sucesso("Login efetuado com sucesso!");
          this.router.navigate(['admin/dashboard']);
        }
      });
    }
    }
}
