/**
*
* Capitalize using TypeScript
*
*/
var Capitalize = /** @class */ (function () {
    function Capitalize() {
    }
    Capitalize.prototype.getCap = function (n) {
        return n.charAt(0).toUpperCase() + n.slice(1);
    };
    ;
    return Capitalize;
}());
var Ca = new Capitalize();
console.log(Ca.getCap("hello test"));
