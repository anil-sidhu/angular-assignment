/**
*
* Palindrome using TypeScript
*
*/
var Palindrome = /** @class */ (function () {
    function Palindrome() {
    }
    Palindrome.prototype.checkPalindrome = function (item) {
        var i = item.length;
        var collection = "";
        for (i; i > 0; i--) {
            collection += item[i - 1];
        }
        return collection === item;
    };
    Palindrome.prototype.getPromot = function () {
        var person = prompt();
        var rand = Math.floor(Math.random() * Math.floor(10));
        if (person === rand) {
            console.warn("Good Work");
        }
        else {
            console.warn("Not Matched", person, rand);
        }
    };
    Palindrome.prototype.simpleCalc = function () {
        var inputValue = document.getElementById("el1").value;
        var inputValue = document.getElementById("el1").value;
        console.warn(inputValue);
    };
    return Palindrome;
}());
var p1 = new Palindrome();
console.warn(p1.checkPalindrome("malayalam"));
// console.warn(p1.getTime())
// console.warn(p1.getPromot())
// console.warn(p1.simpleCalc()) 
