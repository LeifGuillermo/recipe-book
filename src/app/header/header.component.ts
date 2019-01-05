import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navClick = new EventEmitter<string>();

  onNavClick(destination: string) {
    this.navClick.emit(destination);
  }

  constructor() { }

  ngOnInit() {
  }

}
