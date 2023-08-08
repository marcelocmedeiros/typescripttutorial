// A TypeScript array is an ordered list of data. To declare an array that holds values of a specific type, you use the following syntax:

let arrayName: type[];

// For example, the following declares an array of strings:

let skills: string[];

// And you can add one or more strings to the array:

skills[0] = "Problem Solving";
skills[1] = "Programming";

// or use the push() method:

skills.push('Software Design');

// The following declares a variable and assigns an array of strings to it:

let skills = ['Problem Sovling','Software Design','Programming'];

// In this example, TypeScript infers the skills array as an array of strings. It is equivalent to the following:

let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];

// Once you define an array of a specific type, TypeScript will prevent you from adding incompatible values to the array.

// The following will cause an error:

skills.push(100);

// … because we’re trying to add a number to the string array.

// When you extract an element from the array, TypeScript can do type inference. For example:

let skill = skills[0];
console.log(typeof(skill));

// Output: string 

// TypeScript array properties and methods
// TypeScript arrays can access the properties and methods of a JavaScript. For example, the following uses the length property to get the number of element in an array:

let series = [1, 2, 3];
console.log(series.length); // 3

// And you can use all the useful array method such as forEach(), map(), reduce(), and filter(). For example:

let series = [1, 2, 3];
let doubleIt = series.map(e => e* 2);
console.log(doubleIt); //[ 2, 4, 6 ] 

// Storing values of mixed types
// The following illustrates how to declare an array that hold both strings and numbers:

let scores = ['Programming', 5, 'Software Design', 4]; 

// In this case, TypeScript infers the scores array as an array of string | number.

// It’s equivalent to the following:

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 