import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface SessionItem {
  id: string
  title: string
  room: number
}

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})

export class SessionItemComponent {
  @Input() session?: SessionItem;

  constructor(private router: Router) { }

  redirectToSpecifySession(): void {
    this.router.navigate(['/admin/session', this.session?.id])
  }
}
