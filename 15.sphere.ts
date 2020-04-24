
/**
*
* Sphere using TypeScript
*
*/
class Sphere {
    Name():void {
        const form = document.querySelector('form')!;
        form.onsubmit = (_) => {
            const data = new FormData(form);
            let radius = data.get('radius') as any;
            let volume = data.get('volume') as any;
            radius = Math.abs(parseInt(radius));
            volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
            volume = volume.toFixed(4);
            console.warn(volume)
            return false; // prevent reload
        };
    }
}
let Sp = new Sphere()
Sp.Name();
