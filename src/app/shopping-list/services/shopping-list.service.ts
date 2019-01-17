import { Recipe } from './../../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('lbs of Rice', 5),
        new Ingredient('Shrimp', 100),
        new Ingredient('lbs of Pork', 5)
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    public deleteIngredient(i: number){
        this.ingredients.splice(i, 1);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    public clearIngredients() {
        this.ingredients = [];
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    public addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}