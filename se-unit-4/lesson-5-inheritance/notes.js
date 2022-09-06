function Laptop(type, oS) {
    this.type = type;
    this.oS = oS;
    this.isOn = false;
}

Laptop.prototype.turnOn = function() {
    this.isOn = true;
    return `Laptop now on.`
}

Laptop.prototype.turnOff = function() {
    this.isOn = false;
    return 'Laptop now off.'
}

function Employee(name, salary, position) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.laptop = new Laptop('16" Macbook Pro', 'MacOS');
}

Employee.prototype.increaseSalary = function(raise) {
    this.salary += raise;
    return `${this.salary} is your new salary.`
}

Employee.prototype.doWork = function() {
    this.laptop.turnOn();
    return "Ready to work..."
}

function Executive(name, salary, position, nameOfAssistant) {
    Employee.call(this, name, salary, position);
    this.assistant = new Employee(nameOfAssistant, 75000, 'Executive Assistant');
}

Executive.prototype = Object.create(Employee.prototype);
Executive.prototype.constructor = Executive;

Executive.prototype.fireEmployee = function(employee) {
    employee.salary = 0;
    delete employee.laptop;
    employee.position = 'Unemployed';
}
