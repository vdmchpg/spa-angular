import { Injectable } from '@angular/core'; // необходимо для внедрения сервисов в другие сервисы
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Course } from '../models/course';

@Injectable()
export class ApiService {
    private apiUrlCredentials : string = 'api/login';
    private apiUrlLogout : string = 'api/logout';
    private apiUrlAuthors : string = 'api/authors';
    private apiUrlCourses : string = 'api/courses';
    private apiHeaders : any = new Headers({'Content-type': 'application/json'});
    private apiOptions : {} = new RequestOptions({ headers:  this.apiHeaders });

    constructor(private http: Http){}


    authentificate (data: {login: string, password: string}) : Observable<{authStatus: string}> {
        return this.http.post(this.apiUrlCredentials, data, this.apiOptions)
            .map(res => {
                return res.json()
            })
            .catch(this.handleError);
    }

    logout (data: {login: string}) : Observable<{logoutStatus: string}>{
        return this.http.post(this.apiUrlLogout, data, this.apiOptions)
            .map(res => {
                return res.json()
            })
            .catch(this.handleError);
    }

    getCourses(): Observable<Course[]> {
        return this.http.get(this.apiUrlCourses)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

   /* createCourse(data : {title: string, date: number, duration: number, description: string, authors: string[]}){
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers});
        let {title, date, duration, description, authors} = data;

        let course = new Course(title, date, duration, description, authors);
        return this.http.post(this.apiUrlCourses, course, options)
            .map(res => res.json().data)
            .catch(this.handleError);
    }*/

    createCourse(course: Course) : Observable<Course> {
        return this.http.post(this.apiUrlCourses, course, this.apiOptions)
            .map(res => res.json().data)
            .catch(this.handleError);
    }


    deleteCourse(course: Course) : Observable<Course> {
        const url = `${this.apiUrlCourses}/${course.id}`;

        return this.http.delete(url, this.apiOptions)
            .catch(this.handleError);
    }

    getCourse(courseId: string) : Observable<Course> {
        const url = `${this.apiUrlCourses}/${courseId}`;

        return this.http.get(url, this.apiOptions)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    updateCourse(course: Course) : Observable<Course> {
        const url = `${this.apiUrlCourses}/${course.id}`;

        return this.http.put(url, course, this.apiOptions)
            .catch(this.handleError);
    }



    getAuthors(): Observable<string[]> {
        return this.http.get(this.apiUrlAuthors)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('Some error', error);
        return Observable.throw(error.message || error);
    }
}
