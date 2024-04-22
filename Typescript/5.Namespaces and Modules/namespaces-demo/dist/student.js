"use strict";
var StudentGroup;
(function (StudentGroup) {
    class Student {
        marks;
        favouriteSubject;
        constructor(marks, favouriteSubject) {
            this.marks = marks;
            this.favouriteSubject = favouriteSubject;
        }
    }
    StudentGroup.Student = Student;
})(StudentGroup || (StudentGroup = {}));
