import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { PipesModule } from '../core/pipes/Pipes.module';
import { CourseEditRoutingModule } from './course-edit.routing.module';


import { CourseEditComponent } from './course-edit.component';

@NgModule({
    imports: [
        CourseEditRoutingModule,
        CommonModule,
        FormsModule,
        PipesModule
    ],
    declarations: [
        CourseEditComponent,
    ],
})
export class CourseEditModule { }
