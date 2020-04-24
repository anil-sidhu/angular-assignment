/**
*
* OddEven using TypeScript
*
*/
var OddEven = /** @class */ (function () {
    function OddEven() {
    }
    OddEven.prototype.getOE = function () {
        {
            for (var x = 20; x <= 35; x++) {
                if (x === 0) {
                    console.log(x + " is even");
                }
                else if (x % 2 === 0) {
                    console.log(x + " is even");
                }
                else {
                    console.log(x + " is odd");
                }
            }
        }
    };
    return OddEven;
}());
var OE = new OddEven();
OE.getOE();
