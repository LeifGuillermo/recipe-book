import { RecipeSearchService } from '../services/recipe-search.service';
import { Directive, ElementRef, HostListener, OnInit, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive ({
    selector: '[appInputDebounceKeyUp]',
})
export class RecipeSearchDirective implements OnInit {
    @Input('appInputDebounceKeyUp') debounceTime: number;
    private debounceRecipeSearch = new EventEmitter<void>();
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