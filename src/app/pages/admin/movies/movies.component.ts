import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDeleteMovieComponent } from '../../../components/dialogs/confirm-delete-movie/confirm-delete-movie.component'
import { FilmeResponse } from 'src/app/models/filme/filme-response'
import { ApiService } from 'src/app/service/api-service'

interface Movie {
  id: number
  name: string
  producer: string
  status: string
  date: string
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit{
  filmes: FilmeResponse[] = [];
  asideStatus: boolean = false

  movies: Movie[] = []
  displayedItems: Movie[] = []
  pageSize = 10
  currentPage = 1
  totalPages = 0

  searchMovie: string = ''

  constructor(public dialog: MatDialog, 
    private apiService: ApiService) {
    this.asideStatus = false
    this.movies = this.generateMovies()
    this.totalPages = Math.ceil(this.movies.length / this.pageSize)
    this.updateDisplayedItems()
  }

  ngOnInit(): void {
      this.getAllMovies();
  }

  getAllMovies(): void{
    this.apiService.getAllMovie().subscribe(
      (data) => {
        this.filmes = data;
      },
      (error) => {
        console.error("Erro ao obter lista de filmes:", error)
      }
    )
  }

  // Dialog
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteMovieComponent, {
      data: { id },

    })

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed')
    //   this.animal = result;
    // })
  }

  // Filter
  filterItems() {
    if (!this.searchMovie) {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize

      this.displayedItems = [...this.movies.slice(startIndex, endIndex)]
    } else {
      const filteredItems = this.movies.filter(item =>
        item.name.toLowerCase().includes(this.searchMovie.toLowerCase())
      )

      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize

      this.displayedItems = [...filteredItems.slice(startIndex, endIndex)]
    }
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
    this.displayedItems = this.movies.slice(startIndex, endIndex);
  }

  // Movies
  generateMovies(): Movie[] {
    let movies: Movie[] = []

    for (let i = 0; i < 50; i++) {
      movies.push({
        id: i,
        name: `Simulant ${i}`,
        producer: 'Marion King',
        status: 'Em cartaz',
        date: '08:30 25/09/2023',
      })
    }

    return movies
  }

  // Side Bar
  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
