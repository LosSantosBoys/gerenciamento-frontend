import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteMovieComponent } from 'src/app/components/dialogs/confirm-delete-movie/confirm-delete-movie.component';
import { ApiService } from 'src/app/service/api-service';
import { FuncionarioResponse } from 'src/app/models/funcionario/funcionario-response';
import { FuncionarioPage } from 'src/app/models/funcionario/funcionario-response-page';
import { SnackbarService } from 'src/app/components/snackbar/snackbar';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioAtualizarRequest } from 'src/app/models/funcionario/funcionario-atualizar-request';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.css'], 
  })

  export class EmployeeEditComponent implements OnInit{
    asideStatus: boolean = false
    funcionario: FuncionarioResponse = {
        id: 0,
        nome: '',
        documento: '',
        email: '',
        cargo: '',
        criadoEm: new Date(),
        alteradoEm: new Date(),
        status: '',
        username: '',
        tipoAutorizacao: '',
        statusFuncionario: '',
        areaAtuacao: '',
        salario: 0,
        dataAdmissao: new Date() 
    };
    funcionarioRequest: FuncionarioAtualizarRequest = {
        nome: '',
        cargo: '',
        tipoAutorizacao: '',
        salario: 0
    }
    documento: string = '';
    mudanca: boolean = false;

    constructor(private dialog: MatDialog,
        private apiService: ApiService,
        private snackBarService: SnackbarService,
        private route: ActivatedRoute,
        private router: Router) {
        this.asideStatus = false
        this.documento = this.getDocumento();
      }

      getDocumento(): string {
        return this.route.snapshot.paramMap.get('documento') || '';
      }
      

      ngOnInit(): void {
        this.getFuncionario(this.documento);
      }
    
      getFuncionario(documento: string) {
        this.apiService.buscarFuncionarioPorDocumento(documento).subscribe(
          (data: FuncionarioResponse) => {
            this.funcionario = data;
            this.funcionario.areaAtuacao = data.areaAtuacao;
            this.funcionarioRequest = {
                nome: this.funcionario.nome,
                cargo: this.funcionario.cargo,
                tipoAutorizacao: this.funcionario.tipoAutorizacao,
                salario: this.funcionario.salario
            };
        },
          (error) => {
            this.snackBarService.falha('Erro ao buscar funcionário. Tente novamente mais tarde.');
          }
        );
      }

      onSubmit(form: NgForm): void {
        if (form.valid) {
            const hasChanges = !(
                this.funcionario.nome === this.funcionarioRequest.nome &&
                this.funcionario.cargo === this.funcionarioRequest.cargo &&
                this.funcionario.tipoAutorizacao === this.funcionarioRequest.tipoAutorizacao &&
                this.funcionario.salario === this.funcionarioRequest.salario
            );
    
            if (!hasChanges) {
                this.snackBarService.falha('Nenhuma alteração foi feita.');
                return;
            }

            this.apiService.atualizarFuncionario(this.documento, this.funcionarioRequest).subscribe({
                next: () => {
                    this.snackBarService.sucesso('Dados atualizados.');
                    this.getFuncionario(this.documento);
                    this.router.navigate(['/admin/employees']);
                },
                error: (error) => {
                    if (error.status === 409) {
                        this.snackBarService.falha(`Dados existentes no sistema.`);
                    } else if (error.status === 403) {
                        this.snackBarService.falha('Usuário sem permissão.');
                    } else {
                        this.snackBarService.falha('Ops! Encontramos um problema ao processar sua solicitação.');
                    }
                }
            });
        }
    }

    // Side Bar
    handleOpenAside(): void {
        this.asideStatus = true
    }

    handleCloseAside(): void {
        this.asideStatus = false
    }
  }