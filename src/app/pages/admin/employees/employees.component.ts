import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteMovieComponent } from 'src/app/components/dialogs/confirm-delete-movie/confirm-delete-movie.component';
import { ApiService } from 'src/app/service/api-service';
import { FuncionarioResponse } from 'src/app/models/funcionario/funcionario-response';
import { FuncionarioPage } from 'src/app/models/funcionario/funcionario-response-page';
import { SnackbarService } from 'src/app/components/snackbar/snackbar';
import { Router } from '@angular/router';


export interface Funcionario {
  id: number
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  cargo: string;
  username: string;
  tipoAutorizacao: string
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  asideStatus: boolean = false
  nome: string = '';
  documento: string = '';
  cargo: string = '';

  funcionarios: FuncionarioPage = {
    content: [],
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: false,
      unpaged: false
    },
    last: false,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    first: false,
    numberOfElements: 0,
    empty: false
  };
  pageSize = 5
  currentPage = 1
  totalPages = 0

  constructor(public dialog: MatDialog,
    private apiService: ApiService,
    private snackBarService: SnackbarService,
    private router: Router) {
    this.asideStatus = false
  }

  ngOnInit(): void {
    this.getFuncionarios();
  }
  
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getFuncionarios();
    }
  }  
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getFuncionarios();
    }
  }
  
  getFuncionarios(): void {
    const apiPage = this.currentPage - 1;
  
    this.apiService.buscarFuncionarios(
      apiPage,
      this.pageSize,
      this.nome,
      this.documento,
      this.cargo
    ).subscribe(
      (data: FuncionarioPage) => {
        const funcionariosAtivos = data.content.filter(funcionario => funcionario.status === 'ATIVO');
  
        this.funcionarios.content = funcionariosAtivos;
        this.totalPages = Math.ceil(funcionariosAtivos.length / data.totalPages);
      },
      (error) => {
        console.error("Erro ao obter lista de funcionários:", error);
      }
    );
  }  

  inativarFuncionario(documento: string) {
    this.documento = ''; 
    
    this.apiService.inativarFuncionario(documento).subscribe(
      () => {
        this.snackBarService.sucesso('Funcionário inativado com sucesso!');
        this.getFuncionarios();
      },
      (error) => {
        console.error("Erro ao inativar funcionário:", error);
        
        this.snackBarService.falha('Erro ao inativar funcionário. Tente novamente mais tarde.',)
      }
    );
  }

  // Dialog
  openDialog(documento: string): void {
    console.log(documento)
    const dialogRef = this.dialog.open(ConfirmDeleteMovieComponent, {
      data: {
        documento,
        text: 'Funcionario'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Ok') {
        console.log(documento)
        this.inativarFuncionario(documento);
      }
    });
  }

  editarFuncionario(documento: string) {
    this.router.navigate(['/admin/employee/edit', documento]);
  }

  // Side Bar
  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
