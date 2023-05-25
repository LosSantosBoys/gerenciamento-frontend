import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-open-aside',
  templateUrl: './btn-open-aside.component.html',
  styleUrls: ['./btn-open-aside.component.css']
})
export class BtnOpenAsideComponent {
  @Output() openedAside: EventEmitter<void> = new EventEmitter<void>();

  openAside(): void {
    this.openedAside.emit()
  }
}
