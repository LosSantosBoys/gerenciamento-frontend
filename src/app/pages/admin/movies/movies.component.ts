import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDeleteMovieComponent } from '../../../components/dialogs/confirm-delete-movie/confirm-delete-movie.component'
import { FilmeResponse } from 'src/app/models/filme/filme-response'
import { ApiService } from 'src/app/service/api-service'
import { AuthGuard } from 'src/app/components/root-guard/auth-guard'
import { FilmePage } from 'src/app/models/filme/filme-response-page'

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
  filmes: FilmePage = {
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
  };  asideStatus: boolean = false

  movies: Movie[] = []
  displayedItems: Movie[] = []
  pageSize = 8
  currentPage = 1
  totalPages = 0
  classificacaoIndicativaImagens: { [key: string]: string } = {
    L: '../../../../../../assets/images/L.png',
    '10': '../../../../../../assets/images/10.png',
    '12': '../../../../../../assets/images/12.png',
    '16': '../../../../../../assets/images/16.png',
    '18': '../../../../../../assets/images/18.png',
  };

  searchMovie: string = ''

  constructor(public dialog: MatDialog, 
    private apiService: ApiService,
    private authGuard: AuthGuard) {
    this.asideStatus = false
    this.movies = this.generateMovies()
    this.totalPages = Math.ceil(this.movies.length / this.pageSize)
    this.updateDisplayedItems()
  }

  ngOnInit(): void {
      this.getAllMovies();
  }

  getAllMovies(): void{
    const apiPage = this.currentPage - 1;

    this.apiService.getAllMovie(apiPage, this.pageSize).subscribe(
      (data: FilmePage) => {
        if (data) {
          this.filmes.content = data.content;
          this.totalPages = data.totalPages;
        } else {
          this.totalPages = 1;
        }
      },
      (error) => {
        console.error("Erro ao obter lista de filmes:", error)
      }
    )
  }

  getImagemClassificacao(classificacao: string): string {
    return this.classificacaoIndicativaImagens[classificacao];
  }

  // Dialog
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteMovieComponent, {
      data: {
        id,
        text: 'Filme'
      },
    })
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
      this.getAllMovies();
    }
  }  
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getAllMovies();
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
