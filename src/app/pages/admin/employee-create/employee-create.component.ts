import { Component } from '@angular/core';
import { FuncionarioRequest } from 'src/app/models/funcionario/funcionario-model';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  asideStatus: boolean = false

  funcionario: FuncionarioRequest = {
    nome: '',
    cargo: '',
    cpf: '',
    email: '',
    senha: '',
    telefone: '',
    username: '',
    tipoAutorizacao: ''
  };

  constructor(private apiService: ApiService) {
    this.asideStatus = false
  }

  onSubmit(): void {
    this.apiService.addFuncionario(this.funcionario).subscribe({
      error: (error) => console.error(error),
      complete: () => console.info('cadastrado')
    });
  }

  // Side Bar
  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
