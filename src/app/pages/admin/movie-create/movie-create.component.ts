import { Component } from '@angular/core';
import { FilmeRequest } from 'src/app/models/filme/filme-model';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})

export class MovieCreateComponent {
  asideStatus: boolean = false
  selectedBannerImage: string | ArrayBuffer | null = null
  selectedPosterImage: string | ArrayBuffer | null = null

  filme: FilmeRequest = {
    titulo: '',
    descricao: '',
    duracao: '',
    classificacaoIndicativa: '',
  };

  constructor(private apiService: ApiService) {
    this.asideStatus = false
  }

  onSubmit(): void {
    this.apiService.addMovie(this.filme).subscribe({
      error: (error) => console.error(error),
      complete: () => console.info('cadastrado')
    });
  }

  onBannerImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement
    const file = inputElement.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.selectedBannerImage = reader.result
      }
      reader.readAsDataURL(file)
    } else {
      this.selectedBannerImage = null
    }
  }

  onPosterImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement
    const file = inputElement.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.selectedPosterImage = reader.result
      }
      reader.readAsDataURL(file)
    } else {
      this.selectedPosterImage = null
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
