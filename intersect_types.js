class MyClass {
    constructor(name, age) {
        this.age = age;
        if (name) {
            this.name = name;
        }
    }
}
class MyClass1 {
    constructor(education) {
        this.education = education;
    }
}
let uni = 89;
let obj_c;
obj_c = {
    name: 'mukul',
    greet() {
        console.log(this.name);
    },
    age: 36
};
function doSomething(a) {
    if ('name' in a) { //Type guards is way to check object
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
};
doSomething(obj_fun);
console.log(JSON.stringify(obj_c));
function classFunction(obj) {
    if (obj instanceof MyClass) {
        console.log(obj.age, obj.name);
    }
    else {
        console.log(obj.education);
    }
}
let myclass = new MyClass('Mukul', 26);
let myclass1 = new MyClass1('B.E');
classFunction(myclass);
//# sourceMappingURL=intersect_types.js.map