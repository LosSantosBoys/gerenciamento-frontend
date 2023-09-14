import { Component } from '@angular/core';
import { FuncionarioRequest } from 'src/app/models/funcionario/funcionario-model';
import { ApiService } from 'src/app/service/api-service';
import { SnackbarService } from 'src/app/components/snackbar/snackbar';

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

  constructor(private apiService: ApiService,
    private snackbarService: SnackbarService,
    ) {
    this.asideStatus = false
  }

  onSubmit(): void {
    this.apiService.addFuncionario(this.funcionario).subscribe({
      error: (error) => this.snackbarService.falha("Erro"),
      complete: () => this.snackbarService.sucesso("Cadastrado")
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
