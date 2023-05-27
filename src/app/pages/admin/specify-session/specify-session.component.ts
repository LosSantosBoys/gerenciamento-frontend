import { Component } from '@angular/core';
import { CardInfoSpecifySession } from 'src/app/components/card-info-specify-session/card-info-specify-session.component';

interface ChairRow {
  chairs: Chair[]
}

type ChairType = 'deselected' | 'unavailabel' | 'selected'

interface Chair {
  type: ChairType
  letter: string
  number: number
}


@Component({
  selector: 'app-specify-session',
  templateUrl: './specify-session.component.html',
  styleUrls: ['./specify-session.component.css']
})

export class SpecifySessionComponent {
  asideStatus: boolean = false
  cardsInfoSpecifySession: CardInfoSpecifySession[] = []
  chair_row: ChairRow[] = []

  constructor() {
    this.asideStatus = false
    this.cardsInfoSpecifySession = this.generateCardsInfoSpecifySession()
    this.chair_row = this.generateChairRow()
  }

  // Room
  handleToggleSelectRoom(selectedChair: Chair): void {
    let chairNumber = selectedChair.number

    // find row of chair
    if (chairNumber === 1 || chairNumber === 2) {
      this.selectChair(this.chair_row[0], selectedChair)
    } else if (chairNumber >= 3 && chairNumber <= 10) {
      this.selectChair(this.chair_row[1], selectedChair)
    } else {
      this.selectChair(this.chair_row[2], selectedChair)
    }
  }

  selectChair(chairRow: ChairRow, selectedChair: Chair): void {
    chairRow.chairs.map(chair_item => {
      // find chair
      if (chair_item.letter === selectedChair.letter && chair_item.number === selectedChair.number) {
        // revert selection
        if (chair_item.type === 'deselected') {
          chair_item.type = 'selected'
        } else {
          chair_item.type = 'deselected'
        }
      }
    })
  }

  generateChairRow(): ChairRow[] {
    let chairRow: ChairRow[] = []

    chairRow[0] = {
      chairs: [
        {
          letter: 'A',
          type: 'deselected',
          number: 2
        },
        {
          letter: 'A',
          type: 'deselected',
          number: 1
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 2
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 1
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 2
        },
        {
          letter: 'C',
          type: 'deselected',
          number: 1
        },
        {
          letter: 'D',
          type: 'deselected',
          number: 2
        },
        {
          letter: 'D',
          type: 'deselected',
          number: 1
        },
        {
          letter: 'E',
          type: 'unavailabel',
          number: 2
        },
        {
          letter: 'E',
          type: 'unavailabel',
          number: 1
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 2
        },
        {
          letter: 'F',
          type: 'deselected',
          number: 1
        },
        {
          letter: 'G',
          type: 'deselected',
          number: 2
        },
        {
          letter: 'G',
          type: 'unavailabel',
          number: 1
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 2
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 1
        },
        {
          letter: 'I',
          type: 'deselected',
          number: 2
        },
        {
          letter: 'I',
          type: 'deselected',
          number: 1
        },
      ].reverse() as Chair[]
    }

    chairRow[1] = {
      chairs: [
        {
          letter: 'A',
          type: 'deselected',
          number: 3
        },
        {
          letter: 'A',
          type: 'unavailabel',
          number: 4
        },
        {
          letter: 'A',
          type: 'unavailabel',
          number: 5
        },
        {
          letter: 'A',
          type: 'unavailabel',
          number: 6
        },
        {
          letter: 'A',
          type: 'unavailabel',
          number: 7
        },
        {
          letter: 'A',
          type: 'deselected',
          number: 8
        },
        {
          letter: 'A',
          type: 'unavailabel',
          number: 9
        },
        {
          letter: 'A',
          type: 'deselected',
          number: 10
        },
        {
          letter: 'B',
          type: 'unavailabel',
          number: 3
        },
        {
          letter: 'B',
          type: 'unavailabel',
          number: 4
        },
        {
          letter: 'B',
          type: 'unavailabel',
          number: 5
        },
        {
          letter: 'B',
          type: 'unavailabel',
          number: 6
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 7
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 8
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 9
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 10
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 3
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 4
        },
        {
          letter: 'C',
          type: 'deselected',
          number: 5
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 6
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 7
        },
        {
          letter: 'C',
          type: 'deselected',
          number: 8
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 9
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 10
        },
        {
          letter: 'D',
          type: 'unavailabel',
          number: 3
        },
        {
          letter: 'D',
          type: 'deselected',
          number: 4
        },
        {
          letter: 'D',
          type: 'deselected',
          number: 5
        },
        {
          letter: 'D',
          type: 'unavailabel',
          number: 6
        },
        {
          letter: 'D',
          type: 'unavailabel',
          number: 7
        },
        {
          letter: 'D',
          type: 'unavailabel',
          number: 8
        },
        {
          letter: 'D',
          type: 'unavailabel',
          number: 9
        },
        {
          letter: 'D',
          type: 'unavailabel',
          number: 10
        },
        {
          letter: 'E',
          type: 'deselected',
          number: 3
        },
        {
          letter: 'E',
          type: 'deselected',
          number: 4
        },
        {
          letter: 'E',
          type: 'unavailabel',
          number: 5
        },
        {
          letter: 'E',
          type: 'unavailabel',
          number: 6
        },
        {
          letter: 'E',
          type: 'unavailabel',
          number: 7
        },
        {
          letter: 'E',
          type: 'deselected',
          number: 8
        },
        {
          letter: 'E',
          type: 'deselected',
          number: 9
        },
        {
          letter: 'E',
          type: 'deselected',
          number: 10
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 3
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 4
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 5
        },
        {
          letter: 'F',
          type: 'deselected',
          number: 6
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 7
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 8
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 9
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 10
        },
        {
          letter: 'G',
          type: 'deselected',
          number: 3
        },
        {
          letter: 'G',
          type: 'unavailabel',
          number: 4
        },
        {
          letter: 'G',
          type: 'unavailabel',
          number: 5
        },
        {
          letter: 'G',
          type: 'deselected',
          number: 6
        },
        {
          letter: 'G',
          type: 'deselected',
          number: 7
        },
        {
          letter: 'G',
          type: 'unavailabel',
          number: 8
        },
        {
          letter: 'G',
          type: 'deselected',
          number: 9
        },
        {
          letter: 'G',
          type: 'unavailabel',
          number: 10
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 3
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 4
        },
        {
          letter: 'H',
          type: 'deselected',
          number: 5
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 6
        },
        {
          letter: 'H',
          type: 'deselected',
          number: 7
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 8
        },
        {
          letter: 'H',
          type: 'deselected',
          number: 9
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 10
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 3
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 4
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 5
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 6
        },
        {
          letter: 'I',
          type: 'deselected',
          number: 7
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 8
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 9
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 10
        },
      ].reverse() as Chair[]
    }

    chairRow[2] = {
      chairs: [
        {
          letter: 'A',
          type: 'deselected',
          number: 12
        },
        {
          letter: 'A',
          type: 'deselected',
          number: 11
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 12
        },
        {
          letter: 'B',
          type: 'deselected',
          number: 11
        },
        {
          letter: 'C',
          type: 'deselected',
          number: 12
        },
        {
          letter: 'C',
          type: 'unavailabel',
          number: 11
        },
        {
          letter: 'D',
          type: 'deselected',
          number: 12
        },
        {
          letter: 'D',
          type: 'deselected',
          number: 11
        },
        {
          letter: 'E',
          type: 'unavailabel',
          number: 12
        },
        {
          letter: 'E',
          type: 'unavailabel',
          number: 11
        },
        {
          letter: 'F',
          type: 'deselected',
          number: 12
        },
        {
          letter: 'F',
          type: 'unavailabel',
          number: 11
        },
        {
          letter: 'G',
          type: 'deselected',
          number: 12
        },
        {
          letter: 'G',
          type: 'unavailabel',
          number: 11
        },
        {
          letter: 'H',
          type: 'deselected',
          number: 12
        },
        {
          letter: 'H',
          type: 'unavailabel',
          number: 11
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 12
        },
        {
          letter: 'I',
          type: 'unavailabel',
          number: 11
        },
      ].reverse() as Chair[]
    }

    return chairRow
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
