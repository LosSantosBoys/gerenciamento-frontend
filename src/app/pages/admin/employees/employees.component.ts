import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteMovieComponent } from 'src/app/components/dialogs/confirm-delete-movie/confirm-delete-movie.component';


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

export class EmployeesComponent {
  asideStatus: boolean = false

  funcionarios: Funcionario[] = []
  displayedItems: Funcionario[] = []
  pageSize = 10
  currentPage = 1
  totalPages = 0

  searchMovie: string = ''

  constructor(public dialog: MatDialog) {
    this.asideStatus = false
    this.funcionarios = this.generateMovies()
    this.totalPages = Math.ceil(this.funcionarios.length / this.pageSize)
    this.updateDisplayedItems()
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

  // Pagination
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedItems();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedItems();
    }
  }

  updateDisplayedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.funcionarios.slice(startIndex, endIndex);
  }

  // Movies
  generateMovies(): Funcionario[] {
    let employees: Funcionario[] = []

    for (let i = 0; i < 50; i++) {
      employees.push({
        id: i,
        nome: `Name ${i}`,
        cpf: `Cpf ${i}`,
        email: `Email ${i}`,
        telefone: `Telefone ${i}`,
        cargo: `Admin`,
        username: `username`,
        tipoAutorizacao: 'Leitura'
      })
    }

    return employees
  }

  // Side Bar
  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
