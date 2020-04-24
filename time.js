/**
*
* getTime using TypeScript
*
*/
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.prototype.getTime = function () {
        var d = new Date;
        var hours = d.getHours();
        var ampm = hours >= 12 ? 'PM' : 'PM';
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayName = days[d.getDay()];
        return "Today is : " + dayName + "\n  current time is : " + d.getHours() + ampm + " : " + d.getMinutes() + "  : " + d.getSeconds();
    };
    return Time;
}());
var t1 = new Time();
console.warn(t1.getTime());
