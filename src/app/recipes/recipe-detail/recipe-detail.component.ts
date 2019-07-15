import { RecipeService } from './../services/recipe.service';
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  private recipe: Recipe;
  private recipeIdSubscription$: Subscription;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
    if (this.recipeIdSubscription$) {
      this.recipeIdSubscription$.unsubscribe();
    }
    this.recipeIdSubscription$ = activatedRoute.params.subscribe((params: Params) => {
      if (params) {
        const recipeId = params['id'];
        const recipes = recipeService.getRecipes();
        this.recipe = recipes[recipeId];
      }
    });
  }

  onToShoppingListClick() {
    this.recipeService.sendRecipeToShoppingList(this.recipe);
  }
}
