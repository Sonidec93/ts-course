namespace MyMath {
    export namespace Circle {
        const PI = 3.14;
        export function calculateArea(radius: number) {
            return radius * radius * PI;
        }
        export function calculateCircumference(radius:number){
            return 2*PI*radius;
        }
    }
}