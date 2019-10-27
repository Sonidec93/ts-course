export function writable(value:boolean):any{
    return function(target:any,propName:string){
        const descriptor:PropertyDescriptor={
            writable:value
        }
        return descriptor;
    }
}