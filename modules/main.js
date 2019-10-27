"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const partial_1 = __importDefault(require("./partial"));
console.log(partial_1.default(10));
class GenericExample {
    constructor(a, b) {
        this.input_1 = a;
        this.input_2 = b;
    }
    multiplyInputs() {
        return +this.input_1 * +this.input_2;
    }
}
let myObj = new GenericExample(10, 20);
console.log(myObj.multiplyInputs());
function echo(data) {
    return data;
}
let myFun = echo;
console.log(echo('mukul'));
console.log(myFun(10));
//# sourceMappingURL=main.js.map