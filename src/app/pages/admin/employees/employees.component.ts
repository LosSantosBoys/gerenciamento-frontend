import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteMovieComponent } from 'src/app/components/dialogs/confirm-delete-movie/confirm-delete-movie.component';
import { ApiService } from 'src/app/service/api-service';
import { FuncionarioResponse } from 'src/app/models/funcionario/funcionario-response';
import { FuncionarioPage } from 'src/app/models/funcionario/funcionario-response-page';


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
  pageSize = 10
  currentPage = 1
  totalPages = 0

  constructor(public dialog: MatDialog,
    private apiService: ApiService) {
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
    const nome = '';
    const documento = '';
    const cargo = '';
    const apiPage = this.currentPage - 1;
  
    this.apiService.buscarFuncionarios(
      apiPage,
      this.pageSize,
      nome,
      documento,
      cargo
    ).subscribe(
      (data: FuncionarioPage) => {
        this.funcionarios = data;
        this.totalPages = data.totalPages;
      },
      (error) => {
        console.error("Erro ao obter lista de funcionários:", error);
      }
    );
  }

  // Dialog
  openDialog(id: number): void {
    this.dialog.open(ConfirmDeleteMovieComponent, {
      data: {
        id,
        text: 'Funcionario'
      }
    })
  }

  // Side Bar
  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
