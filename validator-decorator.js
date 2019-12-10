var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var validatorConfigObj = {};
class Course {
    constructor(courseName, price) {
        this.courseName = courseName;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "courseName", void 0);
__decorate([
    Positive,
    Required
], Course.prototype, "price", void 0);
function Required(target, propName) {
    validatorConfigObj[target.constructor.name] = ifPropPresent(validatorConfigObj, target, propName, 'Required');
}
function ifPropPresent(validatorConfigObj, target, propName, validation) {
    console.log(target.constructor.name, validatorConfigObj);
    return Object.assign(Object.assign({}, validatorConfigObj[target.constructor.name]), { [propName]: validatorConfigObj[target.constructor.name] && (validatorConfigObj[target.constructor.name][propName]) ? [...validatorConfigObj[target.constructor.name][propName], validation] : [validation] });
}
function Positive(target, propName) {
    validatorConfigObj[target.constructor.name] = ifPropPresent(validatorConfigObj, target, propName, 'Positive');
}
function validate(obj) {
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
    if (!validate(m)) {
        alert('Please check the values entered');
    }
    else {
        console.log(m);
    }
});
//# sourceMappingURL=validator-decorator.js.map