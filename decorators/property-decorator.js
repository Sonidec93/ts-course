"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function writable(value) {
    return function (target, propName) {
        const descriptor = {
            writable: value
        };
        return descriptor;
    };
}
exports.writable = writable;
//# sourceMappingURL=property-decorator.js.map