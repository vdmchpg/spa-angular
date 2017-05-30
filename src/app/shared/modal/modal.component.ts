import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'epm-modal',
    styleUrls: ['modal.component.less'],
    templateUrl: 'modal.component.html',
})
export class ModalComponent {
    constructor(public activeModal: NgbActiveModal) {}
}
