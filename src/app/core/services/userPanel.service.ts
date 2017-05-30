import { Injectable } from '@angular/core';

import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserPanelService {
    public user: Subject<string> = new Subject();
    public user$: Observable<string> = this.user.asObservable();
}
