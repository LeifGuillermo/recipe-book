import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('lbs of Rice', 5),
    new Ingredient('Shrimp', 100),
    new Ingredient('lbs of Pork', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
