import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cdp-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    constructor(private router: Router) {
        router.navigate(['/courses']);
    }
}
