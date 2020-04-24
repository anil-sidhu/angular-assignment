/**
*
* Prompt using TypeScript
*
*/
class Prompt {
    getPromot(): void {
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

let pro = new Prompt()
console.warn(pro.getPromot())

