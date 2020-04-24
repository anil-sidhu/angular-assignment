
/**
*
* Capitalize using TypeScript
*
*/



class getName {
    Name():void {
        const form = document.querySelector('form')!;
        form.onsubmit = (_) => {
            const data = new FormData(form);
            const fname = data.get('fname') as string;
            const lname = data.get('lname') as string;
            console.warn(fname,lname)
            return false; // prevent reload
        };
    };
}
let gN = new getName()
gN.Name();
