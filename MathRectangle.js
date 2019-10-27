var MyMath;
(function (MyMath) {
    function calculateArea(length, breadth) {
        return length * breadth;
    }
    MyMath.calculateArea = calculateArea;
    function calculatePerimeter(length, breadth) {
        return 2 * (length + breadth);
    }
    MyMath.calculatePerimeter = calculatePerimeter;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=MathRectangle.js.map