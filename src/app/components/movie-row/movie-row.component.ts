import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent {
  movies = [
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
    { imageUrl: 'assets/images/posters/aladin.jpg', title: 'Aladin', date: '05/02/2020', url: '#' },
  ];

  @Input()
  rowTitle!: string;

  @Input()
  address!: string;

  @Input()
  rowContent!: any[];
}
