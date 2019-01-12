import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeSearchService {
  searchValueUpdated = new EventEmitter<string>();
  updateSearch(newSearchValue: string) {
    this.searchValueUpdated.emit(newSearchValue);
  }
}
