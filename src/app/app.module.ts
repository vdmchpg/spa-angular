import { NgModule } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core';
import { SharedModule } from './shared';

/* Routing Module */
import { AppRoutingModule } from './app.routing.module';

/* Application configuration */
import * as ApplicationConfig from './config';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/services/data.service';


@NgModule({
    imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        BrowserModule,
        CoreModule.forRoot(ApplicationConfig, APP_ENV),
        SharedModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [ AppComponent ],
    providers: [
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
