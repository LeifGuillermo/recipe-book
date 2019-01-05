import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = {
    recipes: true,
    shoppingList: false
  };

  routeToPage (display: {recipes: boolean, shoppingList: boolean}) {
    console.log(display);
    this.display.recipes = display.recipes;
    this.display.shoppingList = display.shoppingList;
  }
}
