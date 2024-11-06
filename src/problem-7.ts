/* 
Problem 7:
Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
*/

// Define the Car class
class Car {
    constructor(public make: string, public model: string, public year: number) { }

    // Define the getCarAge method that returns the car's age which is number
    getCarAge(): number {
        const currentYear = 2024; // considering current year 2024
        return currentYear - this.year;
    }
}

const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge()); // 6



