import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})

export class AsideNavComponent {
  cssClass: string = 'aside_wrapper'

  @Input() status: boolean = false
  @Output() closedAside: EventEmitter<void> = new EventEmitter<void>()

  ngOnChanges(): void {
    if (this.status) {
      this.cssClass = 'aside_open aside_wrapper'
      return
    }

    this.cssClass = 'aside_wrapper'
  }

  closeAside(): void {
    this.closedAside.emit()
  }
}
