import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header.component';
import { UserPanelModule } from '../user-panel';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        UserPanelModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
        UserPanelModule
    ]
})
export class HeaderModule {}
