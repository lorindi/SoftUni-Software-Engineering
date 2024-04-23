namespace StudentGroup {
  export class Student {
    marks: number[];
    favouriteSubject: string;

    constructor(marks: number[], favouriteSubject: string) {
      this.marks = marks;
      this.favouriteSubject = favouriteSubject;
    }
  }
}
