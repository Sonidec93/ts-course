var MyMath;
(function (MyMath) {
    let Circle;
    (function (Circle) {
        const PI = 3.14;
        function calculateArea(radius) {
            return radius * radius * PI;
        }
        Circle.calculateArea = calculateArea;
        function calculateCircumference(radius) {
            return 2 * PI * radius;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
//# sourceMappingURL=MathCircle.js.map