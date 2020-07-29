"use strict";
// tsc hello World
// 类型注解
var printhelloWorld = function (person) {
    console.log(person);
};
printhelloWorld('小明');
function greeter(person) {
    return "hello\u3001" + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'user', age: 16 };
console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
greeter(new Student('Jace', 'ss'));
