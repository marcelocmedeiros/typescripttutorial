// In JavaScript, you can call a function without passing any arguments even though the function specifies parameters. Therefore, JaveScript supports the optional parameters by default.

// In TypeScript, the compiler checks every function call and issues an error in the following cases:

// The number of arguments is different from the number of parameters specified in the function.
// Or the types of arguments are not compatible with the types of function parameters.
// Because the compiler thoroughly checks the passing arguments, you need to annotate optional parameters to instruct the compiler not to issue an error when you omit the arguments.

// To make a function parameter optional, you use the ? after the parameter name. For example:

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// How it works:

// First, use the ? after the c parameter.
// Second, check if the argument is passed to the function by using the expression typeof c !== 'undefined'.
// Note that if you use the expression if(c) to check if an argument is not initialized, you would find that the empty string or zero would be treated as undefined.

// The optional parameters must appear after the required parameters in the parameter list.

// For example, if you make the b parameter optional, and c parameter required the TypeScript compiler will issue an error:

function multiply(a: number, b?: number, c: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// Error: error TS1016: A required parameter cannot follow an optional parameter.