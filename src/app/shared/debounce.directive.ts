import { RecipeSearchService } from './recipe-search.service';
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive ({
    selector: '[appInputDebounceKeyUp]',
})
export class DebounceKeyUpDirective implements OnInit {
    @HostListener('keyup') keyUpListener(event: Event) {
        // TODO: add debouncing
       this.recipeSearchService.updateSearch(this.elementRef.nativeElement.value);
    }

    constructor(private elementRef: ElementRef, private recipeSearchService: RecipeSearchService) {}

    ngOnInit() {

    }
}