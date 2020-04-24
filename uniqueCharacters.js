/**
*
* UniqueCharacters using TypeScript
*
*/
var UniqueCharacters = /** @class */ (function () {
    function UniqueCharacters() {
    }
    UniqueCharacters.prototype.findUC = function (str) {
        {
            var uniql = "";
            for (var x = 0; x < str.length; x++) {
                if (uniql.indexOf(str.charAt(x)) == -1) {
                    uniql += str[x];
                }
            }
            return uniql;
        }
    };
    return UniqueCharacters;
}());
var Uc = new UniqueCharacters();
console.log(Uc.findUC("thequickbrownfoxjumpsoverthelazydog111"));
