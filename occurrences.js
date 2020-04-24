/**
*
* Occurrences using TypeScript
*
*/
var Occurrences = /** @class */ (function () {
    function Occurrences() {
    }
    Occurrences.prototype.getOcc = function (str1) {
        {
            var uchars = {};
            str1.replace(/\S/g, function (l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
            return uchars;
        }
    };
    return Occurrences;
}());
var occ = new Occurrences();
console.log(occ.getOcc("thequickbrownfoxjumpsoverthelazydog111111"));
