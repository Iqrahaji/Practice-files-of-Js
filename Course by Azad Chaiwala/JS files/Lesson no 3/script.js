// data types in javascript

// 1. String
let name = "Iqra haji";
console.log("Data type of name:", typeof name); // Output: string   
// 2. Number
let age = 25;
console.log("Data type of age:", typeof age); // Output: number
// 3. Boolean
let isStudent = true;
console.log("Data type of isStudent:", typeof isStudent); // Output: boolean
// 4. Undefined
let address;    
console.log("Data type of address:", typeof address); // Output: undefined
// 5. Null
let phoneNumber = null;
console.log("Data type of phoneNumber:", typeof phoneNumber); // Output: object (this is a known quirk in JavaScript)   
// 6. Object
let person = {
    firstName: "Azad",
    lastName: "Chaiwala",
    age: 25
};
console.log("Data type of person:", typeof person); // Output: object
// 7. Symbol
let uniqueId = Symbol("id");
console.log("Data type of uniqueId:", typeof uniqueId); // Output: symbol
// 8. BigInt
let bigNumber = BigInt(9007199254740991);
console.log("Data type of bigNumber:", typeof bigNumber); // Output: bigint 
// Example of dynamic typing
let dynamicVar = "Hello, World!";
console.log("Initial data type of dynamicVar:", typeof dynamicVar); // Output: string
dynamicVar = 42;
console.log("Data type of dynamicVar after reassignment:", typeof dynamicVar); // Output: number    dynamicVar = false;
console.log("Data type of dynamicVar after second reassignment:", typeof dynamicVar); // Output: boolean    
// Example of type coercion
let result = "5" + 10;      
console.log("Result of '5' + 10:", result); // Output: "510"
console.log("Data type of result:", typeof result); // Output: string
result = "5" - 2;
console.log("Result of '5' - 2:", result);
console.log("Data type of result:", typeof result); // Output: number
// Example of parsing strings to numbers
let strNum = "100";
let parsedNum = parseInt(strNum);
console.log("Parsed number:", parsedNum); // Output: 100
console.log("Data type of parsedNum:", typeof parsedNum); // Output: number
let floatNum = parseFloat("10.5");
console.log("Parsed float number:", floatNum);
console.log("Data type of floatNum:", typeof floatNum); // Output: number
// Example of converting numbers to strings
let numToStr = 123;
let convertedStr = numToStr.toString();
console.log("Converted string:", convertedStr); // Output: "123"
console.log("Data type of convertedStr:", typeof convertedStr); // Output: string   