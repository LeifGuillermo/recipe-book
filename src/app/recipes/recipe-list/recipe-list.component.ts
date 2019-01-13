import { RecipeSearchService } from './../../shared/recipe-search.service';
import { Recipe } from './../recipe.model';
import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  testRecipeImageLink = 'https://www.maxpixel.net/static/photo/2x/Substantial-Lunch-Eat-Fry-Up-Paella-Rice-Ladle-529592.jpg';
  recipes: Recipe[] = [
    new Recipe('Paella', 'Super Delicious Fried Rice Dish', this.testRecipeImageLink),
    new Recipe('Totally not Paella', 'Totally not a Super Delicious Fried Rice Dish', this.testRecipeImageLink),
    new Recipe('Crisp Duck', 'Never had it', this.testRecipeImageLink),
    new Recipe('Fried Tofu', 'If made well, this is very tasty!', this.testRecipeImageLink)

  ];

  visibleRecipes: Recipe[] = this.recipes;

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor (private recipeSearchService: RecipeSearchService) {
    recipeSearchService.searchValueUpdated.subscribe(
      (newSearchVal: string) => this.visibleRecipes
        = recipeSearchService.updateVisibleRecipes(this.recipes, newSearchVal)
    );
    
  }

  selectedRecipe(recipeItem) {
    this.recipeSelected.emit(recipeItem);
  }

  clearSearch() {
    this.recipeSearchService.updateSearch("");
    this.recipeSearchService.clearSearch();
  }
}
