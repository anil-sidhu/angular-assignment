/**
*
* Display Name using TypeScript
*
*/
var DisplayName = /** @class */ (function () {
    function DisplayName() {
    }
    DisplayName.prototype.getName = function (n) {
        return n;
    };
    return DisplayName;
}());
var DN = new DisplayName();
console.log(DN.getName("Anil"));
