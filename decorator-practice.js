// import { editable } from "./decorators/method-decorator";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(constrFn) {
    console.log(constrFn);
}
function prop(target, propName) {
    console.log(target, propName);
}
function metho(value) {
    return function (target, prop, desc) {
        desc.writable = value;
    };
}
let Student = class Student {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    getname() {
        console.log(this._name);
    }
};
__decorate([
    prop
], Student.prototype, "_name", void 0);
__decorate([
    metho(false)
], Student.prototype, "getname", null);
Student = __decorate([
    log
], Student);
var student = new Student('Mukul');
console.log(student.name);
student.getname = function () {
    console.log('hello');
};
console.log(student.getname());
//# sourceMappingURL=decorator-practice.js.map