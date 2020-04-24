/**
*
* Calculator using TypeScript
*
*/

class Calculator {
    constructor() {
        let btnM = document.getElementById("multiply");
        let btnD = document.getElementById("divide");
        btnM.addEventListener("click", (e) => this.getMultiply());
        btnD.addEventListener("click", (e) => this.getDivide());
    }
    getMultiply():void {
        var t1 = (<HTMLInputElement>document.getElementById("el1")).value;
        var t2 = (<HTMLInputElement>document.getElementById("el1")).value;
        document.getElementById("result").innerText = ""+(parseInt(t1) * parseInt(t2))
    }
    getDivide():void {
        var t1 = (<HTMLInputElement>document.getElementById("el1")).value;
        var t2 = (<HTMLInputElement>document.getElementById("el1")).value;
        document.getElementById("result").innerText = ""+(parseInt(t1) / parseInt(t2))
    }
}
let cal = new Calculator()

