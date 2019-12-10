"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const method_decorator_1 = require("./method-decorator");
const property_decorator_1 = require("./property-decorator");
const parameter_decorator_1 = require("./parameter-decorator");
require("jquery");
$('body').css('backgroundColor', 'red');
function logged(constructorfn) {
    console.log(constructorfn);
}
let MyClass = class MyClass {
    constructor() {
        console.log('MyClass constructor');
    }
};
MyClass = __decorate([
    logging(false)
], MyClass);
//factory
function logging(value) {
    return value ? logged : null;
}
//useful decorator 
function printable(constructorfn) {
    constructorfn.prototype.print = function () {
        console.log(this);
    };
}
let Student = class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.age, this.name);
    }
};
__decorate([
    property_decorator_1.writable(true)
], Student.prototype, "name", void 0);
__decorate([
    method_decorator_1.editable(false)
], Student.prototype, "display", null);
Student = __decorate([
    logging(true),
    printable,
    __param(1, parameter_decorator_1.paramInfo)
], Student);
let student = new Student('Mukul', 26);
student.print();
student.display();
student.display = function () {
    console.log('changed the function');
};
student.display();
const arr = ['mukul', 'soni'];
// arr.push('ff');arr.pop();//doesn't work  when type is made as Readonly
//# sourceMappingURL=class-decorator.js.map