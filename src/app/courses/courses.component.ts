import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/services';
import { BreadcrumbsService } from '../core/services';
import { Course } from './../core/models/course'

@Component({
    selector: 'cdp-app-courses',
    templateUrl: 'courses.component.html',
    styleUrls: ['courses.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class CoursesComponent implements OnInit {
    public courses: Course[];
    public filteredCourses: Course[];

    constructor(private apiService: ApiService, private breadcrumbsService : BreadcrumbsService, private router : Router){
        this.courses = [];
        this.filteredCourses = [];
    }

    ngOnInit() {
        console.log('CDP Courses component initialized');
        this.breadcrumbsService.breadcrumbs.next([{name: '/ Courses'}]);
        this.apiService.getCourses().subscribe(res => {
            this.courses = res;
            this.filteredCourses = [...this.courses];
        });
    }

    deleteCourse (course: Course) {
        this.apiService.deleteCourse(course).subscribe(res => {
            let index = this.courses.indexOf(course);

            if (index > -1){
                this.courses.splice(index, 1);
                this.filteredCourses = [...this.courses];
            }
        });
    }

    editCourse (course: Course) {
        this.router.navigate(['/courses/edit', course.id]);
    }

    filterCourses(filterValue: string) {
        const testString = new RegExp(filterValue, 'i');

        this.filteredCourses = filterValue ?
            this.courses.filter(course => {
                return testString.test(course.title);
            }) : this.filteredCourses = [...this.courses];
    }
}
