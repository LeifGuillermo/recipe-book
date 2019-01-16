import { Recipe } from './../../recipe.model';
import { Component, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent {
  @Input() recipe: Recipe;

  onRecipeClick() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  constructor (private recipeService: RecipeService) {}
}
