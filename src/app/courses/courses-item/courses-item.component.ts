import { Component, Input, Output,ViewEncapsulation, EventEmitter } from '@angular/core';
import { Course } from './../../core/models/course';

@Component({
    selector: 'cdp-app-courses-item',
    templateUrl: 'courses-item.component.html',
    styleUrls: ['courses-item.component.less'],
    encapsulation: ViewEncapsulation.None,

})

export class CoursesItemComponent {
    @Input() course: Course;
    @Output() delete = new EventEmitter();
    @Output() edit = new EventEmitter();

    onEdit() {
        this.edit.emit(this.course);
    }

    onDelete() {
        this.delete.emit(this.course);
    }
}
