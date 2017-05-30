import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseEditComponent } from './course-edit.component';

const courseEditRoutes: Routes = [
    {
        path: '',
        component: CourseEditComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(courseEditRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CourseEditRoutingModule {}
