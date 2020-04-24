var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Arithmetic = /** @class */ (function () {
    function Arithmetic() {
    }
    Arithmetic.prototype.sum = function (a, b) {
        return a + b;
    };
    return Arithmetic;
}());
var Adder = /** @class */ (function (_super) {
    __extends(Adder, _super);
    function Adder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Adder;
}(Arithmetic));
var aObj = new Adder();
console.warn(aObj.sum(10, 20));
