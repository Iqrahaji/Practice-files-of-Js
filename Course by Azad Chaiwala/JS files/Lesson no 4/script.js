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

