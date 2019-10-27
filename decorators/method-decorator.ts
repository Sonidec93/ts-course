export function editable(value:boolean){
    return function(target:any,propName:string,descriptor:PropertyDescriptor){
        descriptor.writable=value
    }
}