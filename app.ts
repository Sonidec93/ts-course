
let a: number;

a = 10;
console.log(a);

let b: [string, number];
b = ['mukul', 26];
console.log(b);

interface MyInterface {
    data(a: number, b: number): void;

}
let obj: MyInterface;
enum Color {
    grey = 10,
    black,

}
console.log(Color.black);
type myType = <T>(a: number, b: T) => T[]
let myObj: myType;
myObj = (x, y) => {
    console.log(`inside my function ${x} ${y}`);
    return Array.of(y);
}

console.log('MyObj' + myObj(10, 10));

var obj1 = {
    username: 'mukul',
    age: 26,
    getData() {
        return `${this.age} ${this.username}`;
    }
}

let { username, age, getData } = obj1;
console.log(getData.call(obj1));
console.log(username, age);
// getData();

function acceptRest(...data: [string, number]) {
    return data;
}
interface OptionalMethod {
    validation?(flag: any): boolean|string;
}

let g: OptionalMethod = { validation() { return 'true' } };

obj1.username = 'mahesh';
console.log(acceptRest("Mukul", 10));
let tuple: [string, number];
tuple = ['apple', 1];
username = 'mahesh';
tuple.pop();
tuple.push('10');//push and pop works with tuples in TS
console.log(tuple);

