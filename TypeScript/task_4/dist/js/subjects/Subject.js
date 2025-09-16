"use strict";
var Subjects;
(function (Subjects) {
    class Subject {
        setTeacher(teacher) {
            this._teacher = teacher;
        }
        get teacher() {
            return this._teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
