import { Component, ViewChild } from '@angular/core';
import { CardInfoSpecify } from 'src/app/components/card-info-specify/card-info-specify.component';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexNonAxisChartSeries,
} from "ng-apexcharts";
import { Movieitem } from 'src/app/components/movie-item/movie-item.component';

export type ChartOptionsTickets = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  theme: ApexTheme;
  yaxis: ApexYAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

export type ChartOptionsGenres = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  title: ApexTitleSubtitle;
};

export type ChartOptionsProducts = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  chartOptionsTickets: ChartOptionsTickets;
  chartOptionsGenres: ChartOptionsGenres;
  chartOptionsProducts: ChartOptionsProducts;

  asideStatus: boolean
  cardsInfoSpecify: CardInfoSpecify[] = []
  mostWatchedMovies: Movieitem[]
  nextMovies: Movieitem[]

  constructor() {
    this.asideStatus = false
    this.mostWatchedMovies = this.generateMovies()
    this.nextMovies = this.generateMovies()
    this.cardsInfoSpecify = this.generateCardsInfoSpecify()
    this.chartOptionsTickets = this.chartOptionsTickets = {
      series: [
        {
          name: "Compra de ingressos",
          data: [
            {
              x: "Dec 23 2017",
              y: null
            },
            {
              x: "Dec 24 2017",
              y: 44
            },
            {
              x: "Dec 25 2017",
              y: 31
            },
            {
              x: "Dec 26 2017",
              y: 38
            },
            {
              x: "Dec 27 2017",
              y: null
            },
            {
              x: "Dec 28 2017",
              y: 32
            },
            {
              x: "Dec 29 2017",
              y: 55
            },
            {
              x: "Dec 30 2017",
              y: 51
            },
            {
              x: "Dec 31 2017",
              y: 67
            },
            {
              x: "Jan 01 2018",
              y: 22
            },
            {
              x: "Jan 02 2018",
              y: 34
            },
            {
              x: "Jan 03 2018",
              y: null
            },
            {
              x: "Jan 04 2018",
              y: null
            },
            {
              x: "Jan 05 2018",
              y: 11
            },
            {
              x: "Jan 06 2018",
              y: 4
            },
            {
              x: "Jan 07 2018",
              y: 15
            },
            {
              x: "Jan 08 2018",
              y: null
            },
            {
              x: "Jan 09 2018",
              y: 9
            },
            {
              x: "Jan 10 2018",
              y: 34
            },
            {
              x: "Jan 11 2018",
              y: null
            },
            {
              x: "Jan 12 2018",
              y: null
            },
            {
              x: "Jan 13 2018",
              y: 13
            },
            {
              x: "Jan 14 2018",
              y: null
            }
          ],
          color: '#ee525b'
        }
      ],
      chart: {
        type: "area",
        height: 350,
        animations: {
          enabled: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.8,
        type: "pattern",
        pattern: {
          style: "horizontalLines",
          width: 5,
          height: 5,
          strokeWidth: 3
        }
      },
      markers: {
        size: 5,
        hover: {
          size: 9
        }
      },
      title: {
        text: "Compra de ingressos",
        style: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      },
      tooltip: {
        intersect: true,
        shared: false
      },
      theme: {
        palette: "palette1"
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: 'rgba(255, 255, 255, 0.7)'
          }
        }
      },
      yaxis: {
        title: {
          text: ""
        }
      }
    }
    this.chartOptionsGenres = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        foreColor: 'white',
        background: 'transparent',
        dropShadow: {
          enabled: false
        },
        sparkline: {
          enabled: false
        }
      },
      labels: ["Romance", "Comedia", "Aventura", "Acao", "Terror"],
      title: {
        text: 'Gêneros mais assistidos',
        style: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
    this.chartOptionsProducts = {
      series: [44, 55, 13, 43],
      chart: {
        type: "pie",
        foreColor: 'white',
        background: 'transparent',
        dropShadow: {
          enabled: false
        },
        sparkline: {
          enabled: false
        }
      },
      labels: ["Pipoca", "Refrigerante", "Chocolate", "Salgados"],
      title: {
        text: 'Produtos mais Comprados',
        style: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  }

  generateCardsInfoSpecify(): CardInfoSpecify[] {
    let cards: CardInfoSpecify[] = []

    cards[0] = {
      image: {
        src: '../../../assets/icons/movie_item.png',
        alt: 'icone de uma sala de cinema',
        title: 'sala de cinema'
      },
      title: '58 filmes',
      subtitle: 'Em cartaz'
    }

    cards[1] = {
      image: {
        src: '../../../assets/icons/cinema.png',
        alt: 'icone de uma sala de cinema',
        title: 'sala de cinema'
      },
      title: '4 sessões',
      subtitle: 'Em andamento'
    }

    cards[2] = {
      image: {
        src: '../../../assets/icons/caixa.png',
        alt: 'icone de uma sala de cinema',
        title: 'sala de cinema'
      },
      title: '102 produtos',
      subtitle: 'Vendidos'
    }

    return cards
  }

  generateMovies(): Movieitem[] {
    let movies: Movieitem[] = []

    movies[0] = {
      image: {
        src: 'https://images.archambault.ca/images/PG/2899/2899143-gf.jpg?404=default&w=400',
        alt: 'icone de uma sala de cinema',
      },
      title: 'O Rei Do Show',
      id: '1',
      releaseDate: new Date().toDateString()
    }

    movies[1] = {
      image: {
        src: 'https://blogger.googleusercontent.com/img/a/AVvXsEih0zrqaLRZ5IB1-dpONvXmEm8Hvd33MiZtQdhATr1UVSMEPLAS-8owNMTAvZQSg2u7JzGhQKlRvq8mYcsykIKgwS6hHeBqXlWHpg-j30sOlRiq1pQCmvrcy-aGv2crQA9NTRkIcPBx9w2WFXmpk-GhLM87ce9vXZkzitx4i1Fl_ahLXE4bhLU',
        alt: 'icone de uma sala de cinema',
      },
      title: 'Enrolados',
      id: '2',
      releaseDate: new Date().toDateString()
    }

    movies[2] = {
      image: {
        src: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/02/04/18/35/1468867.jpg',
        alt: 'icone de uma sala de cinema',
      },
      title: 'Aladin',
      id: '3',
      releaseDate: new Date().toDateString()
    }

    return movies
  }

  handleOpenAside(): void {
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
