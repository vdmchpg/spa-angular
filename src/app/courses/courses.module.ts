import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { CoursesRoutingModule } from './courses.routing.module';
import { PipesModule } from '../core/pipes/Pipes.module';

import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesSearchComponent } from './courses-search/courses-search.component';

@NgModule({
    imports: [
        CoursesRoutingModule,
        CommonModule,
        FormsModule,
        PipesModule
    ],
    declarations: [
        CoursesComponent,
        CoursesListComponent,
        CoursesItemComponent,
        CoursesSearchComponent
    ],
})
export class CoursesModule { }
