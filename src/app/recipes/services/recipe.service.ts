import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private testRecipeImageLink = 'https://www.maxpixel.net/static/photo/2x/Substantial-Lunch-Eat-Fry-Up-Paella-Rice-Ladle-529592.jpg';
    
    private recipes: Recipe[] = [
        new Recipe(
            'Paella',
            'Super Delicious Fried Rice Dish',
            this.testRecipeImageLink,
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Totally not Paella',
            'Totally not a Super Delicious Fried Rice Dish',
            this.testRecipeImageLink,
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 50)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}