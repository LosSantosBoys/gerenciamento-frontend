import { Component, Input } from '@angular/core';

export type Movieitem = {
  id: string
  image: {
    src: string
    alt: string
  }
  releaseDate: string
  title: string
}

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent {
  @Input() movie: Movieitem;

  constructor() {
    this.movie = {
      id: '',
      image: {
        src: '',
        alt: ''
      },
      releaseDate: '',
      title: ''
    }
  }
}
