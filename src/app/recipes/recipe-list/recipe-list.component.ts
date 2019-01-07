import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  testRecipeImageLink = 'https://www.maxpixel.net/static/photo/2x/Substantial-Lunch-Eat-Fry-Up-Paella-Rice-Ladle-529592.jpg';
    recipes: Recipe[] = [
    new Recipe('Paella', 'Super Delicious Fried Rice Dish', this.testRecipeImageLink),
    new Recipe('Totally not Paella', 'Totally not a Super Delicious Fried Rice Dish', this.testRecipeImageLink)
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  selectedRecipe(recipeItem) {
    this.recipeSelected.emit(recipeItem);
  }

  constructor () {

  }

  ngOnInit() {

  }
}
