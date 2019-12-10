// import $ from 'jquery';
interface validatorConfig {
    [className: string]: {
        [propName: string]: string[]
    }
}
var validatorConfigObj: validatorConfig = {};



class Course {
    @Required
    courseName: string;
    @Positive
    @Required
    price: number;
    constructor(courseName: string, price: number) {
        this.courseName = courseName;
        this.price = price;
    }
}


function Required(target: any, propName: string) {

    validatorConfigObj[target.constructor.name] = ifPropPresent(validatorConfigObj, target, propName, 'Required');
}

function ifPropPresent(validatorConfigObj: validatorConfig, target: any, propName: string, validation: string): { [prop: string]: string[] } {
    console.log(target.constructor.name,validatorConfigObj);
    return {
        ...validatorConfigObj[target.constructor.name],
        [propName]: validatorConfigObj[target.constructor.name]&&(validatorConfigObj[target.constructor.name][propName]) ? [...validatorConfigObj[target.constructor.name][propName], validation] : [validation]
    };

}

function Positive(target: any, propName: string) {
    validatorConfigObj[target.constructor.name] = ifPropPresent(validatorConfigObj, target, propName, 'Positive');
}
function validate(obj: any) {
    var validatorObject = validatorConfigObj[obj.constructor.name];
    let isValid = true;
    if (!validatorObject) {
        return true;
    }
    else {
        for (let prop in validatorObject) {
            for (let value of validatorObject[prop]) {
                switch (value) {
                    case 'Positive':
                        isValid = isValid && (obj[prop] > 0);
                        break;
                    case 'Required':
                        isValid = isValid && (!!obj[prop]);
                        break;
                }
            }
        }
        return isValid;
    }
}



var formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    var inputArray = formEl.querySelectorAll('input');
    var courseName = inputArray[0].value;
    var price = inputArray[1].value;
    let m = new Course(courseName, +price);

    if(!validate(m)){
        alert('Please check the values entered');
    }else{
        console.log(m);
    }




})
