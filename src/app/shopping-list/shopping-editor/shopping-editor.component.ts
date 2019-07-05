import { ShoppingListService } from './../services/shopping-list.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-editor',
  templateUrl: './shopping-editor.component.html'
})
export class ShoppingListEditorComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  onAddItem() {
    this.shoppingListService.addIngredient(new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    ));
  }

  onDelete(i: number) {
    this.shoppingListService.deleteIngredient(i);
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }

  constructor(private shoppingListService: ShoppingListService) { }
}
