import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from './modal.service'
import { ModalComponent } from './modal.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    providers: [
        ModalService,
    ],
    declarations: [
        ModalComponent
    ],
    entryComponents: [
        ModalComponent
    ]
})
export class ModalModule {}
