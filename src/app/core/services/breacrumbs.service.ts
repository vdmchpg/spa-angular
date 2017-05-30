import { Injectable } from '@angular/core';

import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BreadcrumbsService {
    public breadcrumbs: Subject<Object[]> = new Subject();
    public breadcrumbs$: Observable<Object[]> = this.breadcrumbs.asObservable();
}
