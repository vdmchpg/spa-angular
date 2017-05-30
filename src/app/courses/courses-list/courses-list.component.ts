import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Course } from './../../core/models/course';


@Component({
    selector: 'cdp-app-courses-list',
    templateUrl: 'courses-list.component.html',
    styleUrls: ['courses-list.component.less'],
    encapsulation: ViewEncapsulation.None,
})

export class CoursesListComponent {
    @Input() courses: Course[];
    @Output() delete: EventEmitter<Course> = new EventEmitter();
    @Output() edit: EventEmitter<Course> = new EventEmitter();

    onDelete(course: Course) {
        this.delete.emit(course);
    }

    onEdit(course: Course){
        this.edit.emit(course);
    }
}
