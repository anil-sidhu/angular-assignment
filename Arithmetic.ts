class Arithmetic {
    sum(a: number, b: number): number {
        return a + b;
    }
}

class Adder extends Arithmetic {

}
let aObj = new Adder()
console.warn(aObj.sum(10, 20))