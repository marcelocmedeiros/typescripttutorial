// A rest parameter allows a function to accept zero or more arguments of the specified type. In TypeScript, the rest parameters follow these rules:

// A function has only one rest parameter.
// The rest parameter appears last in the parameter list.
// The type of the rest parameter is an array type.
// To declare a rest parameter, you prefix the parameter name with three dots and use the array type as the type annotation:

function fn(...rest: type[]) {
   //...
}

// The following example shows how to use the rest parameter:

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

// In this example, the getTotal() calculates the total of numbers passed into it.

// Since the numbers parameter is a rest parameter, you can pass one or more numbers to calculate the total:

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

// In this tutorial, you have learned about the TypeScript rest parameters that allow you to represent an indefinite number of arguments as an array.