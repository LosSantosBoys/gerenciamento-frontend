import { Component } from '@angular/core';
import { FilmeRequest } from 'src/app/models/filme/filme-model';
import { ApiService } from 'src/app/service/api-service';
import { SnackbarService } from 'src/app/components/snackbar/snackbar';
import { NgForm } from '@angular/forms'; 

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

  constructor(
    private apiService: ApiService,
    private snackbarService: SnackbarService,
    ) {
    this.asideStatus = false
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.apiService.addMovie(this.filme).subscribe({
        error: (error) => this.snackbarService.falha("Erro"),
        complete: () => this.snackbarService.sucesso("Cadastrado")
      });
    } else {
      this.snackbarService.falha("Preencha todos os campos obrigatórios.");
    }
  }

  isFormValid(): boolean {
    return (
      this.filme.titulo.trim() !== '' &&
      this.filme.descricao.trim() !== '' &&
      this.filme.duracao.trim() !== '' &&
      this.filme.classificacaoIndicativa.trim() !== ''
    );
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
