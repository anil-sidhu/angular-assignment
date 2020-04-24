/**
*
* Palindrome using TypeScript
*
*/

class Palindrome {
    constructor() {
    }
    checkPalindrome(item):boolean {
        let i = item.length
        let collection = "";
        for (i; i > 0; i--) {
            collection += item[i - 1]
        }
        return collection === item
    }
    
    getPromot() {
        var person: any = prompt();
        let rand = Math.floor(Math.random() * Math.floor(10))
        if (person === rand) {
            console.warn("Good Work");
        }
        else {
            console.warn("Not Matched", person, rand);

        }
    }
    simpleCalc() {
        var inputValue = (<HTMLInputElement>document.getElementById("el1")).value;
        var inputValue = (<HTMLInputElement>document.getElementById("el1")).value;
        console.warn(inputValue)
    }
}

let p1 = new Palindrome()
console.warn(p1.checkPalindrome("malayalam"))
// console.warn(p1.getTime())
// console.warn(p1.getPromot())
// console.warn(p1.simpleCalc()) 

