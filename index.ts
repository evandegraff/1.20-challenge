class Person {
    constructor(public name: string, public age: number, public address: string) {}

    getNameAndAddress(separator: string): string {
        try {
            return `${this.name}${separator}${this.address}`;
        } catch (error) {
            throw new Error(`An error occurred: ${error}`);
        }
    }
}

let name = "John Smith";
let age = 25;
let address = "246 Main St, NC USA";
let separator = ", ";

let person = new Person(name, age, address);
console.log(`Name and address: ${person.getNameAndAddress(separator)}`);