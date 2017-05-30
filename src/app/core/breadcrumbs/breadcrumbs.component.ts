import { Component, ViewEncapsulation } from '@angular/core';
import { BreadcrumbsService } from "../services/"

@Component({
    selector: 'cdp-app-breadcrumbs',
    templateUrl: 'breadcrumbs.component.html',
    styleUrls: ['breadcrumbs.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbsComponent {
    public breadcrumbs: Object[] = [];

    constructor(private breadcrumbsService: BreadcrumbsService){
        this.breadcrumbsService.breadcrumbs$.subscribe(
            data => this.breadcrumbs = data
        );
    }
}
