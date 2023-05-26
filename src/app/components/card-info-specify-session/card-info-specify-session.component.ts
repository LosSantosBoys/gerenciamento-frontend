import { Component, Input } from '@angular/core';

export interface CardInfoSpecifySession {
  title: string
  subtitle: string
  image: {
    src: string
    alt: string
    title: string
  }
}

@Component({
  selector: 'app-card-info-specify-session',
  templateUrl: './card-info-specify-session.component.html',
  styleUrls: ['./card-info-specify-session.component.css']
})
export class CardInfoSpecifySessionComponent {
  @Input() card?: CardInfoSpecifySession;
}
