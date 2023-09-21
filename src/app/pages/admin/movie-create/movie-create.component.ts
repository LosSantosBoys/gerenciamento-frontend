import { Component } from '@angular/core';
import { FilmeRequest } from 'src/app/models/filme/filme-model';
import { ApiService } from 'src/app/service/api-service';
import { SnackbarService } from 'src/app/components/snackbar/snackbar';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AddPhotoDialogComponent } from '../add-photo-dialog/add-photo-dialog';
import { MatDialog } from '@angular/material/dialog';


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
    genero: '',
    descricao: '',
    duracao: '',
    classificacaoIndicativa: '',
  };

  constructor(
    private apiService: ApiService,
    private snackbarService: SnackbarService,
    private router: Router,
    private dialog: MatDialog
    ) {
    this.asideStatus = false
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.apiService.addMovie(this.filme).subscribe((data: number) => {
        this.snackbarService.sucesso("Cadastrado com sucesso!");
        setTimeout(() => {
          this.openAddPhotoDialog(data);
        }, 1000);      },
      (error) => {
            this.snackbarService.falha("Falha ao cadastrar item.");
    })} else {
      this.snackbarService.falha("Preencha todos os campos obrigatórios.");
    }
  }

  openAddPhotoDialog(filmeId: number): void {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent, {
      data: { filmeId }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.snackbarService.sucesso("Foto adicionada com sucesso!");
        this.router.navigate(['/admin/movies']);
      } else {
        this.snackbarService.falha("Adição de foto cancelada.");
      }
    });
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
