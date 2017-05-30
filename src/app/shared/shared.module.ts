import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ModalModule } from './modal'


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ModalModule
    ],
    exports: [
        CommonModule,
        ModalModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
