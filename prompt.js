/**
*
* Prompt using TypeScript
*
*/
var Prompt = /** @class */ (function () {
    function Prompt() {
    }
    Prompt.prototype.getPromot = function () {
        var person = prompt();
        var rand = Math.floor(Math.random() * Math.floor(10));
        if (person === rand) {
            console.warn("Good Work");
        }
        else {
            console.warn("Not Matched", person, rand);
        }
    };
    Prompt.prototype.simpleCalc = function () {
        var inputValue = document.getElementById("el1").value;
        var inputValue = document.getElementById("el1").value;
        console.warn(inputValue);
    };
    return Prompt;
}());
var pro = new Prompt();
console.warn(pro.getPromot());
