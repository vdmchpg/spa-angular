import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/services/authGuard'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
    },
    {
        path: 'courses',
        loadChildren: './courses/courses.module#CoursesModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'courses/new',
        loadChildren: './course-edit/course-edit.module#CourseEditModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'courses/edit/:id',
        loadChildren: './course-edit/course-edit.module#CourseEditModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/courses',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
