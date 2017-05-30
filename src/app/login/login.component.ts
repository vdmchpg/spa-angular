import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, AuthGuard, BreadcrumbsService} from '../core/services';

@Component({
    selector: 'cdp-app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
    public authErr : boolean = false;
    public login : string = '';
    public password : string = '';
    public returnUrl: string = this.route.snapshot.queryParams['returnUrl'] || '/courses';

    constructor(private ApiService: ApiService, private breadcrumbsService : BreadcrumbsService, private route: ActivatedRoute, private router: Router){}

    ngOnInit() {
        localStorage.getItem('currentUser') ? this.router.navigate(['/courses']) : null;
        console.log('CDP Login component initialized');

        this.breadcrumbsService.breadcrumbs.next([]);
    }

    public onSubmit() {
        this.ApiService.authentificate({login: this.login, password: this.password}).subscribe(data => {
            data.authStatus === 'OK' ? this.onAuthSuccess() : this.onAuthFail();
        });
    }

    private onAuthSuccess () {
        localStorage.setItem("currentUser", this.login);
        this.router.navigate([this.returnUrl]);
    }

    private onAuthFail () {
        this.authErr = true;
        this.password = "";
    }
}
