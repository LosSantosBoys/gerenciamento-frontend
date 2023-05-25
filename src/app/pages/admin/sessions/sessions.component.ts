import { Component } from '@angular/core';
import { SessionItem } from 'src/app/components/session-item/session-item.component';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent {
  sessions: SessionItem[]
  asideStatus: boolean

  constructor() {
    this.sessions = this.generateSessions()
    this.asideStatus = false
  }

  generateSessions(): SessionItem[] {
    let sessions: SessionItem[] = []

    let total = 20
    for (let i = 0; i < total; i++) {
      sessions[i] = {
        title: `Sessão ${i + 1}-${total}`,
        room: i + 1
      }
    }

    return sessions
  }

  handleOpenAside(): void {
    this.asideStatus = true
    console.log(this.asideStatus);
  }

  handleCloseAside(): void {
    this.asideStatus = false
  }
}
