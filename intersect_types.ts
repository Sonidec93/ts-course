interface MyCustomInterface {
    name?: string,
}
interface MyAgeInterface extends MyCustomInterface {
    age: number;
}
class MyClass implements MyAgeInterface {
    name?: string;
    constructor(name: string, public age: number) {
        if (name) {
            this.name = name;
        }

    }

}
class MyClass1 {
    constructor(public education: string) {

    }
}
type type_a = {
    name: string,
    greet(): void
}

type type_b = {
    age: number
}

type type_c = type_a & type_b;

type Combinable = string | number;
type numeric = number | boolean;

type Universal = Combinable & numeric;

let uni: Universal = 89;

let obj_c: type_c;
obj_c = {
    name: 'mukul',
    greet() {
        console.log(this.name);
    },
    age: 36
}



function doSomething(a: type_c) {
    if ('name' in a) {//Type guards is way to check object
        console.log(a.name);
    }
    else {
        console.log('property not found');
    }
}
let obj_fun = {
    name: 'mahesh',
    greet() {
        console.log(`hello ${this.name}`);
    },
    age: 34
}
doSomething(obj_fun);
console.log(JSON.stringify(obj_c));

function classFunction(obj: class_type) {
    if (obj instanceof MyClass) {
        console.log(obj.age, obj.name);
    }
    else{
        console.log(obj.education);
    }
}

let myclass = new MyClass('Mukul', 26);
let myclass1 = new MyClass1('B.E');
type class_type = MyClass1 | MyClass;

classFunction(myclass);