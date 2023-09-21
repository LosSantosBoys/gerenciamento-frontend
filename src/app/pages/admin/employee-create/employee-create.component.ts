import { Component } from '@angular/core';
import { FuncionarioRequest } from 'src/app/models/funcionario/funcionario-model';
import { ApiService } from 'src/app/service/api-service';
import { SnackbarService } from 'src/app/components/snackbar/snackbar';
import { NgForm } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

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
    username: '',
    tipoAutorizacao: '',
    dataAdmissao: new Date(),
    salario: 0,
    areaAtuacao: ''
  };

  constructor(private apiService: ApiService,
    private snackbarService: SnackbarService,
    private dateAdapter: DateAdapter<Date>
    ) {
    this.asideStatus = false
    this.dateAdapter.setLocale('pt-BB');
  }

  onSubmit(form: NgForm): void {
    console.log(this.funcionario);
    if(form.valid){
      this.apiService.addFuncionario(this.funcionario).subscribe({
        next: () => {
          this.snackbarService.sucesso('Cadastrado');
        },
        error: (error) => {
          if (error.status === 409) {
            this.snackbarService.falha(`Dados existentes no sistema.`);
          } else if (error.status === 403) {
            this.snackbarService.falha('Usuário sem permissão.');
          } else {
            this.snackbarService.falha('Ops! Encontramos um problema ao processar sua solicitação.');
          }
        }
      });
    }
  }

  isFormValid(): boolean {
    return (
      this.funcionario.nome.trim() !== '' &&
      this.funcionario.cpf.trim() !== '' &&
      this.funcionario.email.trim() !== '' &&
      this.funcionario.senha.trim() !== '' &&
      this.funcionario.username.trim() !== '' &&
      this.funcionario.tipoAutorizacao.trim() !== ''
    );
  }

  // Side Bar
  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
