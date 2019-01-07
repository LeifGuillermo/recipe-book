import { Component, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-editor',
  templateUrl: './shopping-editor.component.html'
})
export class ShoppingListEditorComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() shoppingListItemAdded = new EventEmitter<Ingredient>();
  @Output() shoppingListItemDeleted = new EventEmitter<void>();
  @Output() shoppingListCleared = new EventEmitter<void>();

  onAddItem() {
    this.shoppingListItemAdded.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
  }

  onDelete() {}

  onClear() {
    this.shoppingListCleared.emit();
  }

  constructor() {}
}
