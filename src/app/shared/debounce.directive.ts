import { RecipeSearchService } from './recipe-search.service';
import { Directive, ElementRef, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive ({
    selector: '[appInputDebounceKeyUp]',
})
//TODO: Rename SearchDirective since this is going to be more than just debouncing.
export class DebounceKeyUpDirective implements OnInit {
    debounceRecipeSearch = new EventEmitter<void>();
    @Input('appInputDebounceKeyUp') debounceTime: number;
    private defaultDebounceTime = 5000;
    private subscription: Subscription;

    @HostListener('keyup', ['$event']) keyUpEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.debounceRecipeSearch.emit();
    }

    constructor(private elementRef: ElementRef, private recipeSearchService: RecipeSearchService) {
        recipeSearchService.searchValueCleared.subscribe(() => elementRef.nativeElement.value = "");
    }

    ngOnInit() {
        this.subscription = this.debounceRecipeSearch.pipe(
            // The || works like the elvis operator!
            debounceTime(this.debounceTime || this.defaultDebounceTime))
            .subscribe(() => { 
                this.recipeSearchService.updateSearch(this.elementRef.nativeElement.value);
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}