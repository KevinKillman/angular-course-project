import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() navEvent = new EventEmitter<string>();
  recipesNavClick() {
    this.navEvent.emit("recipe");
  }
  shoppingNavClick() {
    this.navEvent.emit("shopping")
  }
}
