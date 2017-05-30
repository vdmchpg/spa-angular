import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserPanelComponent } from './user-panel.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
    ],
    declarations: [
        UserPanelComponent,
    ],
    exports: [
        UserPanelComponent
    ]
})
export class UserPanelModule {}
