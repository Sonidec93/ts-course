import calc from "./partial";

console.log(calc(10));

interface InterfaceTyepExample<T>{
    (data:T):T
}

interface SampleInterface<T> {
    multiplyInputs(): T;
}
class GenericExample<T extends K , K extends string|number> implements SampleInterface<number>{
    input_1: T;
    input_2: T
    constructor(a: T, b: T) {
        this.input_1 = a;
        this.input_2 = b;
    }


    multiplyInputs(): number {
        return +this.input_1 * +this.input_2;
    }
}

let myObj = new GenericExample<number, number>(10, 20);
console.log(myObj.multiplyInputs());

function echo<T>(data: T): T {
    return data;
}

let myFun:InterfaceTyepExample<number>=echo;
console.log(echo<string>('mukul'));
console.log(myFun(10));