/**
*
* Calculator using TypeScript
*
*/
var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        var btnM = document.getElementById("multiply");
        var btnD = document.getElementById("divide");
        btnM.addEventListener("click", function (e) { return _this.getMultiply(); });
        btnD.addEventListener("click", function (e) { return _this.getDivide(); });
    }
    Calculator.prototype.getMultiply = function () {
        var t1 = document.getElementById("el1").value;
        var t2 = document.getElementById("el1").value;
        document.getElementById("result").innerText = "" + (parseInt(t1) * parseInt(t2));
    };
    Calculator.prototype.getDivide = function () {
        var t1 = document.getElementById("el1").value;
        var t2 = document.getElementById("el1").value;
        document.getElementById("result").innerText = "" + (parseInt(t1) / parseInt(t2));
    };
    return Calculator;
}());
var cal = new Calculator();
