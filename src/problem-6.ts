/* 
Problem 6:
Define an interface IProfile with properties name, age, and email. Create a function updateProfile that accepts an object of type IProfile and an object of type Partial representing the updatesInProfile. The function should return the updated profile.

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
*/

// Define the Profile interface
interface IProfile {
    name: string;
    age: number;
    email: string;
}

// Define the PartialProfile type
type PartialProfile = Partial<IProfile>;

// Define the updateProfile function
function updateProfile(profile: IProfile, updatesInProfile: PartialProfile): IProfile {
    return { ...profile, ...updatesInProfile }; 
}

const myProfile : IProfile = { name: "Alice", age: 25, email: "alice@example.com"}

// console.log(updateProfile(myProfile, { age: 26 })); // { name: 'Alice', age: 26, email: 'alice@example.com' }





