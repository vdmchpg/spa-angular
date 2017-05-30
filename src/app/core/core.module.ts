import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }  from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Application header, footer, user-panel */
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { BreadcrumbsModule } from './breadcrumbs';
import { UserPanelModule } from './user-panel';

/* Application-wide Service Providers */
import * as ServiceProviders from './services';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        NgbModule.forRoot(),
        HeaderModule,
        FooterModule,
        BreadcrumbsModule,
        UserPanelModule
    ],
    exports: [
        NgbModule,
        HeaderModule,
        FooterModule,
        BreadcrumbsModule,
        UserPanelModule,
    ]
})
export class CoreModule {
    /**
     * Prevent re-import of the core module by other modules then AppModule
     *
     * @param parentModule
     */
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(ApplicationConfig: Object, ApplicationEnvironment: string): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ...Object.keys(ServiceProviders).map(key => ServiceProviders[key]),
                { provide: 'APP_CONFIG', useValue: ApplicationConfig }, // @TODO: change it to be OpaqueToken
                { provide: 'APP_ENV', useValue: ApplicationEnvironment } // @TODO: change it to be OpaqueToken
            ],
        };
    }
}
