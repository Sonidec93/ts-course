import {editable} from './method-decorator';
import {writable} from './property-decorator';
import {paramInfo} from'./parameter-decorator';
import 'jquery';
$('body').css('backgroundColor','red');
function logged(constructorfn: Function) {
    console.log(constructorfn);
}

@logging(false)
class MyClass {
    constructor() {
        console.log('MyClass constructor');
    }
}

//factory
function logging(value: boolean) {
    return value ? logged : null;
}

//useful decorator 

function printable(constructorfn: Function) {
    constructorfn.prototype.print = function () {
        console.log(this);
    }
}
@logging(true)
@printable
class Student {
    @writable(true)
    name:string;
    age:number
    constructor(name:string,@paramInfo age:number){
        this.name=name;
        this.age=age;
    }
    @editable(true)
    display(){
        console.log(this.age,this.name);
    }

    
}

let student=new Student('Mukul',26);

(<any>student).print();
student.display();
student.display=function(){
    console.log('changed the function')
}
student.display();