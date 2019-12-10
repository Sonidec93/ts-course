// import { editable } from "./decorators/method-decorator";

function log(constrFn: Function) {
    console.log(constrFn);
}

function prop(target: any, propName: string | Symbol) {
    console.log(target, propName);
}
function metho(value: boolean) {
    return function (target: any, prop: string, desc: PropertyDescriptor) {
        desc.writable = value;
    }
}

@log
class Student {
    @prop
    private _name: string
    constructor(name: string) {
        this._name = name
    }

    get name() {
        return this._name;          
    }
    @metho(false)
    getname() {
        console.log(this._name);
    }

}

var student = new Student('Mukul');
console.log(student.name);
student.getname = function () {
    console.log('hello');   
}
console.log(student.getname());