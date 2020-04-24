var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.setFirstName = function (firstName) { this.firstName = firstName; };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.setLastName = function (lastName) { this.lastName = lastName; };
    Employee.prototype.setSalary = function (salary) {
        if (salary > 0) {
            this.monthlySalary = salary;
        }
        else {
            this.monthlySalary = 0;
        }
    };
    Employee.prototype.getSalary = function () {
        return this.monthlySalary;
    };
    return Employee;
}());
function EmployeeTest() {
    var e1 = new Employee();
    var e2 = new Employee();
    var first;
    var last;
    var salary;
    e1.setFirstName("anil");
    e1.setLastName("sidhu");
    e1.setSalary(100);
    e2.setFirstName("peter");
    e2.setLastName("parker");
    e2.setSalary(200);
    console.warn("First Employee's Full Name and Yearly Salary.\n");
    console.warn(e1.getFirstName() + " " + e1.getLastName() + "  " + e1.getSalary() * 12);
    console.warn("Second Employee's Full Name and Yearly Salary.\n");
    console.warn(e2.getFirstName() + " " + e2.getLastName() + "  " + e2.getSalary() * 12);
    console.warn("Displaying New Total Annual Salary After 10% Raise.\n");
    console.warn(e1.getFirstName() + " " + e1.getLastName() + "  " + (e1.getSalary() * 1.10 * 12));
    console.warn(e2.getFirstName() + " " + e2.getFirstName() + "  " + (e2.getSalary() * 1.10 * 12));
}
EmployeeTest();
