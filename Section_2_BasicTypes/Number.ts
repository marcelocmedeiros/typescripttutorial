// The number type
// The following shows how to declare a variable that holds a floating-point value:

let price: number;

// Or you can initialize the price variable to a number:

price = 9.95;

// As in JavaScript, TypeScript supports the number literals for decimal, hexadecimal, binary, and octal literals:

// Decimal numbers
// The following shows some decimal numbers:

let counter1: number = 0;
let x: number = 100, 
    y: number = 200;

// Binary Numbers
// The binary number uses a leading zero followed by a lowercase or uppercase letter “B” e.g., 0b or 0B :

let bin = 0b100;
let anotherBin: number = 0B010;

// Octal Numbers
// An octal number uses a leading zero followed the letter o (since ES2015) 0o. The digits after 0o are numbers in the range 0 through 7:

let octal: number = 0o10;

// Hexadecimal numbers
// Hexadecimal numbers use a leading zero followed by a lowercase or uppercase letter X (0x or 0X). The digits after the 0x must be in the range (0123456789ABCDEF). For example:

let hexadecimal: number = 0XA;

// JavaScript has the Number type (with the letter N in uppercase) that refers to the non-primitive boxed object. You should not use this Number type as much as possible in TypeScript.

// Big Integers
// The big integers represent the whole numbers larger than 253 – 1. A Big integer literal has the n character at the end of an integer literal like this:

let big: bigint = 9007199254740991n;
