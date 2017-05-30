import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services';
import { Router } from '@angular/router';
import { UserPanelService } from '../services'

@Component({
    selector: 'cdp-app-user-panel',
    templateUrl: 'user-panel.component.html',
    styleUrls: ['user-panel.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class UserPanelComponent {
    public user: string;

    constructor(private ApiService: ApiService, private router: Router, private userService: UserPanelService){
      this.userService.user$.subscribe(
          data => this.user = data
      );
    }

    public onLogout() {
        this.ApiService.logout({login: this.user}).subscribe(data => {
            if (data.logoutStatus === 'LoggedOut') {
                this.user = null;
                localStorage.removeItem('currentUser');
                this.router.navigate(['/login']);
            }
        });
    }
}
