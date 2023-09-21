import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'add-photo',
  templateUrl: './add-photo-dialog.html',
  styleUrls: ['./add-photo-dialog.css']
})

export class AddPhotoDialogComponent {
  selectedCapaImage: string | ArrayBuffer | null = null;
  imagemSelecionada: File | null = null;

  constructor(
    public dialogRef: MatDialogRef<AddPhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { filmeId: number },
    private filmeService: ApiService
  ) {}

  onCapaImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedCapaImage = reader.result;
        this.imagemSelecionada = file;
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedCapaImage = null;
      this.imagemSelecionada = null;
    }
  }

  adicionarCapa() {
    if (this.imagemSelecionada) {
      this.filmeService.adicionarFoto(this.data.filmeId, this.imagemSelecionada, this.imagemSelecionada.name)
        .subscribe(
          (response) => {
            console.log('Imagem de capa adicionada com sucesso:', response);
            this.dialogRef.close('success'); 
          },
          (error) => {
            console.error('Erro ao adicionar imagem de capa:', error);
            this.dialogRef.close('error');
          }
        );
    }
}
}