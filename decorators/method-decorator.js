"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
exports.editable = editable;
//# sourceMappingURL=method-decorator.js.map