/**
*
* Capitalize using TypeScript
*
*/

class Capitalize {
    getCap(n: string):string {
        return n.charAt(0).toUpperCase() + n.slice(1)
    };
}
let Ca = new Capitalize()
console.log(Ca.getCap("hello test"));
