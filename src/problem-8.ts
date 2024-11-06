/* 
Problem 8:
Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
*/

{

    // Interface for the person object
    interface IPerson {
        name: string;
        age: number;
        email: string;
    }
    
    // Define the validateKeys function
    function validateKeys<T extends IPerson>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);
    }
    
    const person : IPerson = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"])); // true


    // console.log(validateKeys(person, ["name", "age", "address"])); // false



}


