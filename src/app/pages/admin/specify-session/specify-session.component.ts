import { Component } from '@angular/core';
import { CardInfoSpecifySession } from 'src/app/components/card-info-specify-session/card-info-specify-session.component';

@Component({
  selector: 'app-specify-session',
  templateUrl: './specify-session.component.html',
  styleUrls: ['./specify-session.component.css']
})

export class SpecifySessionComponent {
  asideStatus: boolean
  cardsInfoSpecifySession: CardInfoSpecifySession[]

  constructor() {
    this.asideStatus = false
    this.cardsInfoSpecifySession = this.generateCardsInfoSpecifySession()
  }

  generateCardsInfoSpecifySession(): CardInfoSpecifySession[] {
    let cards: CardInfoSpecifySession[] = []

    cards[0] = {
      image: {
        src: '../../assets/icons/cinema.png',
        alt: 'icone de uma sala de cinema',
        title: 'sala de cinema'
      },
      title: 'Sala',
      subtitle: '1'
    }

    cards[1] = {
      image: {
        src: '../../assets/icons/time.png',
        alt: 'icone de hora',
        title: 'hora'
      },
      title: 'Horário',
      subtitle: '10:00'
    }

    cards[2] = {
      image: {
        src: '../../assets/icons/accents.png',
        alt: 'icone de assento',
        title: 'assento'
      },
      title: 'Assentos Disponível',
      subtitle: '47'
    }

    return cards
  }

  // Side Bar
  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
