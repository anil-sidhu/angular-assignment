class Employee {
    firstName;
    lastName;
    monthlySalary;
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) { this.firstName = firstName; }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) { this.lastName = lastName; }
    setSalary(salary) {
        if (salary > 0) { this.monthlySalary = salary; }
        else { this.monthlySalary = 0; }
    }
    getSalary() {
        return this.monthlySalary;
    }
}


function EmployeeTest() {
    let e1 = new Employee();
    let e2 = new Employee();
    let first;
    let last;
    let salary;

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

EmployeeTest()
