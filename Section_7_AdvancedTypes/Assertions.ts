// Type assertions instruct the TypeScript compiler to treat a value as a specified type. It uses the as keyword to do so:

// expression as targetType

// A type assertion is also known as type narrowing. It allows you to narrow a type from a union type. Let’s see the following simple function:

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

// The getNetPrice() function accepts price, discount, and format arguments and returns a value of the union type number | string.

// If the format is true, the getNetPrice() returns a formatted net price as a string. Otherwise, it returns the net price as a number.

// The following uses the as keyword to instruct the compiler that the value assigned to the netPrice is a string:

let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);

// Output: $95

// Similarly, the following uses the as keyword to instruct the compiler that the returned value of the getNetPrice() function is a number.

let netPrice = getNetPrice(100, 0.05, false) as number;
console.log(netPrice);

// Output: 95

// Note that a type assertion does not carry any type casting. It only tells the compiler which type it should apply to a value for the type checking purposes.

// The alternative Type Assertion syntax
// You can also use the angle bracket syntax <> to assert a type, like this:

// <targetType> value

// For example:

let netPrice = <number>getNetPrice(100, 0.05, false);

// Note that you cannot use angle bracket syntax <> with some libraries such as React. For this reason, you should use the as keyword for type assertions.

// Summary
// Type assertions instruct the compiler to treat a value as a specified type.
// Type assertions do not carry any type conversion.
// Type assertions use the as keyword or an angle bracket <> syntax.