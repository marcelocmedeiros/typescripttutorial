// In TypeScript, function overloadings allow you to establish the relationship between the parameter types and result types of a function.

// Note that TypeScript function overloadings are different from the function overloadings supported by other statically-typed languages such as C# and Java.

// Let’s start with some simple functions:

function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

// In this example:

// The addNumbers() function returns the sum of two numbers.
// The addStrings() function returns the concatenation of two strings.
// It’s possible to use a union type to define a range of types for function parameters and results:

function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

// However, the union type doesn’t express the relationship between the parameter types and results accurately.

// The add() function tells the compiler that it will accept either numbers or strings and return a number or string. It fails to describe that the function returns a number when the parameters are numbers and returns a string if the parameters are strings.

// To better describe the relationships between the types used by a function, TypeScript supports function overloadings. For example:

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}

// In this example, we added two overloads to the add() function. The first overload tells the compiler that when the arguments are numbers, the add() function should return a number. The second overload does the same but for a string.

// Each function overload defines a combination of types supported by the add() function. It describes the mapping between the parameters and the result they return.

// Function overloading with optional parameters
// When you overload a function, the number of required parameters must be the same. If an overload has more parameters than the other, you have to make the additional parameters optional. For example:

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

// The sum() function accepts either two or three numbers. The third parameter is optional. If you don’t make it optional, you will get an error.

// Method overloading
// When a function is a property of a class, it is called a method. TypeScript also supports method overloading. For example:

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

// The count() function can return a number or an array depending on the number of arguments that you pass into it:

let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array

// Output:

1
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20     
]