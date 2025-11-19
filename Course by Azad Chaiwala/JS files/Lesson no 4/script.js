let fruits = ["Apple", "Banana", "Mango"];
// index number: [0] , [1] , [2]
console.log(fruits[1]); // Output: Banana


//if we want to change the value of an array
fruits[1] = "Orange";
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]    

//if we want to add a new value to an array
fruits.push("Pineapple");
console.log(fruits); // Output: ["Apple", "Orange", "Mango", "Pineapple"]
 
//if we want to remove the last value from an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]

//if we want to remove the first value from an array
fruits.shift();
console.log(fruits); // Output: ["Orange", "Mango"]

//if we want to add a new value to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Orange", "Mango"]

//if we want to find the length of an array
console.log(fruits.length); // Output: 3

//if we want to sort an array
fruits.sort();
console.log(fruits); // Output: ["Mango", "Orange", "Strawberry"]

//if we want to reverse an array
fruits.reverse();
console.log(fruits); // Output: ["Strawberry", "Orange", "Mango"]

//if we want to find the index of a value in an array
console.log(fruits.indexOf("Orange")); // Output: 1

//if we want to check if a value is in an array
console.log(fruits.includes("Mango")); // Output: true

//if we want to join two arrays
let vegetables = ["Carrot", "Potato"];
let food = fruits.concat(vegetables);
console.log(food); // Output: ["Strawberry", "Orange", "Mango", "Carrot", "Potato"]

//objects in JavaScript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person.firstName); // Output: John

person.age = 31; //changing the age property
console.log(person.age); // Output: 31  

//adding a new property to the object
person.city = "New York";
console.log(person.city); // Output: New York   

//removing a property from the object
delete person.lastName;
console.log(person); // Output: {firstName: "John", age: 31, city: "New York"}


//Parsing and stringifying the object.
let personString = JSON.stringify(person);
console.log(personString); // Output: "{"firstName":"John","age":31,"city":"New York"}" 

let personObj = JSON.parse(personString);
console.log(personObj); // Output: {firstName: "John", age: 31, city: "New York"}   



