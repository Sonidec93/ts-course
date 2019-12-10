
function AutoBind(target:any,methodName:string,property:PropertyDescriptor){
    const original_method=property.value;
    let desc:PropertyDescriptor={
        enumerable:false,
        configurable:true,
        get(){
            
            return original_method.bind(this);
        }
    }
    return desc;
    
}


class Printer{
    name='This works';
    constructor(){}
    @AutoBind
    getName(){
         console.log(this.name);
    }
}
let obj$1=new Printer();
document.addEventListener('click',obj$1.getName);
