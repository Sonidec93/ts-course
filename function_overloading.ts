type generic=string|number;

function add(a:number,b:number):number
function add(a:string,b:string):string;
function add(a:generic,b:generic){
    if(typeof a==='string'|| typeof b==='string'){
        return a.toString().concat(b.toString());
    }
    else
        return a+b;
}


console.log(add('mukul','kumra').toUpperCase());
console.log(add(10,7).toExponential());