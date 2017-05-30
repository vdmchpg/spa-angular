import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
    /**
     * @param ngbModalService
     */
    constructor(private ngbModalService: NgbModal) {}

    /**
     *
     * @param component
     * @returns {NgbModalRef}
     */
    open(options :any) {
        const modalRef = this.ngbModalService.open(options.component, { windowClass: 'uui-modal'});
        modalRef.componentInstance = Object.assign(modalRef.componentInstance, options);
        return modalRef;
    }

    confirm(options :any = {}) {
        const extendedOptions = Object.assign({
            title: 'Confirmation',
            messages: ['Do you confirm the operation?'],
            buttons: ['yes', 'no']
        }, options, {
            component: ModalComponent
        });

        return this.open(extendedOptions);
    }

    error(options :any = {}) {
        const extendedOptions = Object.assign({
            title: 'Error occurred',
            messages: ['An error occurred!'],
            buttons: ['close']
        }, options, {
            component: ModalComponent
        });

        return this.open(extendedOptions);
    }
}
