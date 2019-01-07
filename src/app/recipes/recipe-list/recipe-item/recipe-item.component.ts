import { Recipe } from './../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent {
  @Input() recipe: Recipe;

  @Output() recipeItemClicked = new EventEmitter<Recipe>();

  onRecipeClick() {
    this.recipeItemClicked.emit(this.recipe);
  }

  constructor () {}
}
