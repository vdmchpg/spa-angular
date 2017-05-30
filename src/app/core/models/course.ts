export class Course {
    id?: number;
    constructor(public title: string,
                public date: number,
                public duration: number,
                public description: string,
                public authors: string[]){
    }
}
