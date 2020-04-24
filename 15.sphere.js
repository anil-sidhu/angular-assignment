/**
*
* Sphere using TypeScript
*
*/
var Sphere = /** @class */ (function () {
    function Sphere() {
    }
    Sphere.prototype.Name = function () {
        var form = document.querySelector('form');
        form.onsubmit = function (_) {
            var data = new FormData(form);
            var radius = data.get('radius');
            var volume = data.get('volume');
            radius = Math.abs(parseInt(radius));
            volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
            volume = volume.toFixed(4);
            console.warn(volume);
            return false; // prevent reload
        };
    };
    return Sphere;
}());
var Sp = new Sphere();
Sp.Name();
