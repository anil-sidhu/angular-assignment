/**
*
* get Filename using TypeScript
*
*/

class FileName {
    constructor() {
        let btn = document.getElementById("getValue");
        btn.addEventListener("click", (e) => this.getExtension(4));
    }
    getExtension() {
        let btn = document.getElementById("inputfile").value.split('.');
        console.warn(btn[btn.length-1])

    }
}

// start the app
new FileName();

