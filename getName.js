/**
*
* Capitalize using TypeScript
*
*/
var getName = /** @class */ (function () {
    function getName() {
    }
    getName.prototype.Name = function () {
        var form = document.querySelector('form');
        form.onsubmit = function (_) {
            var data = new FormData(form);
            var fname = data.get('fname');
            var lname = data.get('lname');
            console.warn(fname, lname);
            return false; // prevent reload
        };
    };
    ;
    return getName;
}());
var gN = new getName();
gN.Name();
