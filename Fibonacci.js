/**
*
* Fibonacci using TypeScript
*
*/
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
    }
    Fibonacci.prototype.getFib = function (n) {
        if (n === 1) {
            return [0, 1];
        }
        else {
            var s = this.getFib(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            return s;
        }
    };
    ;
    return Fibonacci;
}());
var Fi = new Fibonacci();
console.log(Fi.getFib(8));
