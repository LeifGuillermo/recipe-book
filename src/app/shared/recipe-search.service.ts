import { Recipe } from './../recipes/recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeSearchService {
  searchValueUpdated = new EventEmitter<string>();
  searchValueCleared = new EventEmitter<void>();

  public updateSearch(newSearchValue: string) {
    this.searchValueUpdated.emit(newSearchValue);
  }

  public clearSearch(){
    this.searchValueCleared.emit();
  }

  public updateVisibleRecipes(recipeList: Recipe[], searchValue: string): Recipe[] {
    let recipes = recipeList;
    if(searchValue === ""){
      return recipes;
    } else {
      const searchValues = searchValue.toLowerCase().split(' ');
      recipes = recipes.filter((recipe: Recipe) => {
        return (searchValues.filter(
            val => ((recipe.name.toLowerCase().includes(val)) 
            || recipe.description.toLowerCase().includes(val))
            && (val.trim() != "")
          )).length > 0;
      });
    }
    return recipes;
  }

}
