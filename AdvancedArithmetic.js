var MyCalculator = /** @class */ (function () {
    function MyCalculator() {
    }
    MyCalculator.prototype.divisor_sum = function (num) {
        if (num < 1000) {
            var result = 0;
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    if (i == (num / i))
                        result += i;
                    else
                        result += (i + num / i);
                }
            }
            return (result + 1 + num);
        }
        else {
            return 1000;
        }
    };
    return MyCalculator;
}());
var Mcal = new MyCalculator();
console.warn(Mcal.divisor_sum(100));
