import { Component, Input } from '@angular/core';

export interface CardInfoSpecify {
  title: string
  subtitle: string
  image: {
    src: string
    alt: string
    title: string
  }
}

@Component({
  selector: 'app-card-info-specify',
  templateUrl: './card-info-specify.component.html',
  styleUrls: ['./card-info-specify.component.css']
})
export class CardInfoSpecifyComponent {
  @Input() card?: CardInfoSpecify;
}
