import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private testRecipeImageLink = 'https://www.maxpixel.net/static/photo/2x/Substantial-Lunch-Eat-Fry-Up-Paella-Rice-Ladle-529592.jpg';
    
    private recipes: Recipe[] = [
        new Recipe('Paella', 'Super Delicious Fried Rice Dish', this.testRecipeImageLink),
        new Recipe('Totally not Paella', 'Totally not a Super Delicious Fried Rice Dish', this.testRecipeImageLink)
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}