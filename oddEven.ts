/**
*
* OddEven using TypeScript
*
*/

class OddEven {

    getOE():void {
        {

            for (var x = 20; x <= 35; x++) {
                if (x === 0) {
                    console.log(x + " is even");
                }
                else if (x % 2 === 0) {
                    console.log(x + " is even");
                }
                else {
                    console.log(x + " is odd");
                }
            }
        }

    }
}
let OE = new OddEven()


OE.getOE();
