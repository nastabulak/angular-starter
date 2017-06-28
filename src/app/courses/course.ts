export class Course {
    constructor (
    public id: number,
    public title: string,
    public duration: string,
    public date: Date,
    public authors: [string],
    public description?: string) {}
}


