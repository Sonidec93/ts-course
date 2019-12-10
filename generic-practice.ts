interface Lengthy{
    length:number
}

function countAndDescribe<T extends Lengthy>(element:T){
    let msg:string;
    if(element.length==0){
        msg=`Got no length`;
    }
    else if(element.length==1){
        msg=`Got length 1`;
    }
    else{
        msg=`Got ${element.length}`
    }
    return [element,msg];
}

console.log(countAndDescribe('Mukul'));
console.log(countAndDescribe([]));
console.log(countAndDescribe([4,7,9]));

function getProperty<T extends Object,K extends keyof T>(obj:T,key:K){
    console.log(Reflect.ownKeys(obj));
    return  `Value is ${obj[key]}`;

}

console.log(getProperty({name:'Mukul'},'name'));