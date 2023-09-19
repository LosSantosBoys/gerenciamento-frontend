import { Component } from '@angular/core';
import { FuncionarioRequest } from 'src/app/models/funcionario/funcionario-model';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../../styles/authentication.css']
})
export class RegisterComponent {
  funcionario: FuncionarioRequest = {
    nome: '',
    cargo: '',
    cpf: '',
    email: '',
    senha: '',
    username: '',
    tipoAutorizacao: '',
    dataAdmissao: new Date(),
    salario: 0,
    areaAtuacao: ''
  };

  constructor(private apiService: ApiService) { }

  onSubmit(): void {
    this.apiService.postData(this.funcionario).subscribe({
      error: (error) => console.error(error),
      complete: () => console.info('cadastrado'),
    });
  }
}
