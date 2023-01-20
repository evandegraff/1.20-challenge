var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getNameAndAddress = function (separator) {
        try {
            return "".concat(this.name).concat(separator).concat(this.address);
        }
        catch (error) {
            throw new Error("An error occurred: ".concat(error));
        }
    };
    return Person;
}());
var name = "John Smith";
var age = 30;
var address = "123 Main St, Anytown USA";
var separator = ", ";
var person = new Person(name, age, address);
console.log("Name and address: ".concat(person.getNameAndAddress(separator)));
