// TypeScript functions are the building blocks of readable, maintainable, and reusable code.

// Like JavaScript, you use the function keyword to declare a function in TypeScript:

// function name(parameter: type, parameter:type,...): returnType {
//    // do something
// }

// Unlike JavaScript, TypeScript allows you to use type annotations in parameters and return the value of a function.

// Let’s see the following add() function example:

function add(a: number, b: number): number {
    return a + b;
}

// In this example, the add() function accepts two parameters with the number type.

// When you call the add() function, the TypeScript compiler will check each argument passed to the function to ensure that they are numbers.

// In the add() function example, you can only pass numbers into it, not the values of other types.

// The following code will result in an error because it passes two strings instead of two numbers into the add() function:

let sum = add('10', '20');

// Error: TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'

// The types of function parameters are also available within the function body for type checking.

// The : number after the parentheses indicate the return type. The add() function returns a value of the number type in this case.

// When a function has a return type, the TypeScript compiler checks every return statement against the return type to ensure that the return value is compatible with it.

// If a function does not return a value, you can use the void type as the return type. The void keyword indicates that the function doesn’t return any value. For example:

function echo(message: string): void {
    console.log(message.toUpperCase());
}

let res = echo("Hello Echo...")
// The void prevents the code inside the function from returning a value and stops the calling code from assigning the result of the function to a variable.

// When you do not annotate the return type, TypeScript will try to infer an appropriate type. For example:

function add(a: number, b: number) {
    return a + b;
}

// In this example, the TypeScript compiler tries to infer the return type of the add() function to the number type, which is expected.

// However, if a function has different branches that return different types, the TypeScript compiler may infer the union type or any type.

// Therefore, it is important to add type annotations to a function as much as possible.