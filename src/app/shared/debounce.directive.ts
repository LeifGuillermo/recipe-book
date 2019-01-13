import { RecipeSearchService } from './recipe-search.service';
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive ({
    selector: '[appInputDebounceKeyUp]',
})
//TODO: Rename SearchDirective since this is going to be more than just debouncing.
export class DebounceKeyUpDirective implements OnInit {
    @HostListener('keyup') keyUpListener(event: Event) {
        // TODO: add debouncing
       this.recipeSearchService.updateSearch(this.elementRef.nativeElement.value);
    }


    constructor(private elementRef: ElementRef, private recipeSearchService: RecipeSearchService) {
        recipeSearchService.searchValueCleared.subscribe(() => elementRef.nativeElement.value = "");
    }

    ngOnInit() {

    }
}