import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';

const coursesRoutes: Routes = [
    {
        path: '',
        component: CoursesComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(coursesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoursesRoutingModule {}
