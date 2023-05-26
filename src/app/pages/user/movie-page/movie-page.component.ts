import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api-service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  ngOnInit(): void {
    this.getDataFromApi();
  }

  constructor(private apiService: ApiService) { }

  title: string = 'Título do filme';
  synopsis: string = 'Sinopse';
  details: Map<string, string> = new Map<string, string>();
  youtubeUrl!: string;
  credits: Map<string, string> = new Map<string, string>();

  getDataFromApi(): void {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.title = 'Renfield';
        this.synopsis = "O mal não dura a eternidade sem uma pequena ajuda.\n\nNesta moderna história de monstros sobre o leal servo de Drácula, Nicholas Hoult (Mad Max: Estrada da Fúria, franquia X-Men) estrela como Renfield, o torturado ajudante do chefe mais narcisista da história, Drácula (vencedor do Oscar® Nicolas Cage). Renfield é forçado a obter a presa de seu mestre e cumprir todas as suas ordens, não importa o quão degradado seja. Mas agora, após séculos de servidão, Renfield está pronto para ver se há uma vida fora da sombra do Príncipe das Trevas. Se ao menos ele pudesse descobrir como acabar com sua co-dependência."
        this.youtubeUrl = '6LmO6rmDW08';

        this.details.set('Gênero', 'Horror');
        this.details.set('Duração', '95 min.');
        this.details.set('Classificação', '18 anos');

        this.credits.set('Direção', 'Chris McKay');
        this.credits.set('Elenco', 'Nicholas Hoult, Nicholas Cage, Awkwafina');
        this.credits.set('Produção', 'David Alpert, Bryan Furst, Sean Furst');
      },
      error: (error) => console.error(error),
      complete: () => console.info('complete'),
    });
  }
}
