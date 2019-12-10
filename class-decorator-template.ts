

function withTemplate(template:string,id:string){
    return function<T extends {new(...arg:any[]):{name:string}}>(constr:T){
       return class extends constr{
            constructor(...arg:any[]){
                super(arg[0]);
                var hookEl=document.getElementById(id);
                hookEl.innerHTML=template;
                hookEl.querySelector('h1').textContent=this.name
            }
       }
    }
}


@withTemplate('<h1>Hello</h1>','app')
class Person {
    
    constructor(public name: string) { }
}

let person=new Person('mukul'); 