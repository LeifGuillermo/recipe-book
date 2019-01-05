import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() doRouting = new EventEmitter<{recipes: boolean, shoppingList: boolean}>();
  currentState = {recipes: true, shoppingList: false};

  recipesLinkClicked () {
    console.log('recipesLinkClicked');
    this.doRouting.emit({recipes: true, shoppingList: false});
  }

  shoppingListLinkClicked () {
    console.log('shoppingListLinkClicked');
    this.doRouting.emit({recipes: false, shoppingList: true});
  }

  constructor() { }

  ngOnInit() {
  }

}
