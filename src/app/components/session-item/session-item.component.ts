import { Component, Input, SimpleChanges } from '@angular/core';

export interface SessionItem {
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
}
