
/**
*
* Display Name using TypeScript
*
*/

class DisplayName {
    getName(n: string): string {
        return n;
    }
}
let DN = new DisplayName()
console.log(DN.getName("Anil"));
