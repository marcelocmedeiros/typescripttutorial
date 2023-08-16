// A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts with the following syntax:

// (parameter: type, parameter:type,...) => type

// The following example shows how to declare a variable which has a function type that accepts two numbers and returns a number:

let add: (x: number, y: number) => number;

// In this example:

// The function type accepts two arguments: x and y with the type number.
// The type of the return value is number that follows the fat arrow (=>) appeared between parameters and return type.
// Note that the parameter names (x and y) are just for readability purposes. As long as the types of parameters match, it is a valid type for the function.

// Once annotating a variable with a function type, you can assign the function with the same type to the variable.

// TypeScript compiler will match the number of parameters with their types and the return type.

// The following example shows how to assign a function to the add variable:

add = function (x: number, y: number) {
    return x + y;
};

// Also, you can declare a variable and assign a function to a variable like this:

let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

// If you assign other functions whose type doesn’t match to the add variable, TypeScript will issue an error:

let add = function (x: string, y: string): number {
    return x.concat(y).length;
};

// In this example, we reassigned a function, whose type doesn’t match, to the add function variable.
