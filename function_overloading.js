function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString().concat(b.toString());
    }
    else
        return a + b;
}
console.log(add('mukul', 'kumra').toUpperCase());
console.log(add(10, 7).toExponential());
//# sourceMappingURL=function_overloading.js.map