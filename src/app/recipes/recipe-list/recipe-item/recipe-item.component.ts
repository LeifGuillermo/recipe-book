import { Recipe } from './../../recipe.model';
import { Component, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})

export class RecipeItemComponent {
  @Input() recipe: Recipe;

  onRecipeClick() {
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['/recipes', this.recipe.id]);
  }

  constructor(private recipeService: RecipeService, private router: Router) { }
}
