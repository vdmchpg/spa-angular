import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, BreadcrumbsService} from '../core/services';
import { Course } from './../core/models/course'

@Component({
    selector: 'cdp-course-edit',
    templateUrl: 'course-edit.component.html',
    styleUrls: ['course-edit.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class CourseEditComponent implements OnInit {

    public course: Course = {title: '', duration: null, description: '', authors: [], date: null };
    public availableAuthors: {name: string, isSelected: boolean}[] = [];
    public currentAuthors: {name: string, isSelected: boolean}[] = [];
    public update: boolean;

    constructor(private apiService: ApiService, private breadcrumbsService : BreadcrumbsService, private route: ActivatedRoute, private router: Router){}

    ngOnInit() {

        this.route.params.subscribe(res => {
            if(res.id) {
                this.update = true;
                this.apiService.getCourse(res.id).subscribe(res => {
                    this.course  = res;
                    this.currentAuthors = this.course.authors.map(item => ({name: item, isSelected: false}));
                    this.getAuthors();
                    this.breadcrumbsService.breadcrumbs.next([{url:'/course', name: 'Courses'}, {name: this.course.title} ]);
                });
            } else {
                this.getAuthors();
                this.breadcrumbsService.breadcrumbs.next([{url:'/course', name: 'Courses'}, {name: 'New'} ]);
            }
        });

        console.log('CDP Edit component initialized');
    }

    getAuthors () {
       this.apiService.getAuthors().subscribe(res => {
           this.availableAuthors = res
               .map(item => ({name: item, isSelected: false}))
               .filter((item) => !this.course.authors.includes(item.name));
        });
    }


    toggleSelected(item: {name: string, isSelected: boolean}) {
        item.isSelected = !item.isSelected;
    }

    swapAuthors(from: {name: string, isSelected: boolean}[], to: {name: string, isSelected: boolean}[]) {
        return from.filter((item) => {
            if(item.isSelected) {
                to.push(item);
            } else {
                return true;
            }
        });
    }

    dateToMilliseconds (date: string) {
        this.course.date = Date.parse(date);
    }

    addAuthors () {
        this.availableAuthors = this.swapAuthors(this.availableAuthors, this.currentAuthors);
        this.course.authors = this.currentAuthors.map(item => item.name);
    }

    removeAuthors () {
        this.currentAuthors = this.swapAuthors(this.currentAuthors, this.availableAuthors);
        this.course.authors = this.currentAuthors.map(item => item.name);
    }

    saveChanges () {
        this.update ? this.updateCourse(this.course) : this.createCourse(this.course)
    }

    updateCourse (course: Course) {
        this.apiService.updateCourse(course).subscribe(res => {
            this.router.navigate(['/courses']);
        })
    }

    createCourse (course: Course) {
        this.apiService.createCourse(course).subscribe(res => {
            this.router.navigate(['/courses']);
        })
    }
}
