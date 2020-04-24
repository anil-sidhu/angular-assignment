/**
*
* AbsoluteDiff using TypeScript
*
*/
var AbsoluteDiff = /** @class */ (function () {
    function AbsoluteDiff() {
    }
    AbsoluteDiff.prototype.diff = function (x) {
        if (x <= 21) {
            return (21 - x);
        }
        else {
            return (x - 21) * 3;
        }
    };
    return AbsoluteDiff;
}());
var Ad = new AbsoluteDiff();
console.log(Ad.diff(10));
console.log(Ad.diff(2));
console.log(Ad.diff(30));
