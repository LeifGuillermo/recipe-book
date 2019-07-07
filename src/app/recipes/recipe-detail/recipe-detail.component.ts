import { RecipeService } from './../services/recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  onToShoppingListClick() {
    this.recipeService.sendRecipeToShoppingList(this.recipe);
  }
}
