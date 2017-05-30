import { Component, Input, Output,ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
    selector: 'cdp-app-courses-search',
    templateUrl: 'courses-search.component.html',
    styleUrls: ['courses-search.component.less'],
    encapsulation: ViewEncapsulation.None,
})

export class CoursesSearchComponent {
    public searchValue: string = '';

    @Output() search = new EventEmitter();

    onSearch() {
        this.search.emit(this.searchValue);
    }
}
