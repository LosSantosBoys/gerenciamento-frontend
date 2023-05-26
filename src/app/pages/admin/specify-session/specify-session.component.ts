import { Component } from '@angular/core';

@Component({
  selector: 'app-specify-session',
  templateUrl: './specify-session.component.html',
  styleUrls: ['./specify-session.component.css']
})

export class SpecifySessionComponent {
  asideStatus: boolean

  constructor() {
    this.asideStatus = false
  }

  handleOpenAside(): void {
    this.asideStatus = true
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
