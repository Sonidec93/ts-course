let a;
a = 10;
console.log(a);
let b;
b = ['mukul', 26];
console.log(b);
let obj;
var Color;
(function (Color) {
    Color[Color["grey"] = 10] = "grey";
    Color[Color["black"] = 11] = "black";
})(Color || (Color = {}));
console.log(Color.black);
let myObj;
myObj = (x, y) => {
    console.log(`inside my function ${x} ${y}`);
    return Array.of(y);
};
console.log('MyObj' + myObj(10, 10));
var obj1 = {
    username: 'mukul',
    age: 26,
    getData() {
        return `${this.age} ${this.username}`;
    }
};
let { username, age, getData } = obj1;
console.log(getData.call(obj1));
console.log(username, age);
// getData();
function acceptRest(...data) {
    return data;
}
obj1.username = 'mahesh';
console.log(acceptRest("Mukul", 10));
let tuple;
tuple = ['apple', 1];
username = 'mahesh';
tuple.pop();
tuple.push('10'); //push and pop works with tuples in TS
console.log(tuple);
//# sourceMappingURL=app.js.map