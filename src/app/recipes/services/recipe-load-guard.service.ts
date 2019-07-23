import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable()
export class RecipeLoadGuard implements CanActivate, CanActivateChild {
  public constructor(
    private router: Router,
    private recipeService: RecipeService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const routeId = route.params['id'];
    const recipes = this.recipeService.getRecipes();
    if (!this.recipeService) {
      this.router.navigate(['/recipes']);
      return false;
    }
    return true;
  }
}
