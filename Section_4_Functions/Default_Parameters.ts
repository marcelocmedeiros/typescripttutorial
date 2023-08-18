// JavaScript supported default parameters since ES2015 (or ES6) with the following syntax:

function name(parameter1=defaultValue1,...) {
   // do something
}

// In this syntax, if you don’t pass arguments or pass the undefined into the function when calling it, the function will take the default initialized values for the omitted parameters. For example:

function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

// In this example, the applyDiscount() function has the discount parameter as a default parameter.

// When you don’t pass the discount argument into the applyDiscount() function, the function uses a default value which is 0.05.

// Similar to JavaScript, you can use default parameters in TypeScript with the same syntax:

function name(parameter1:type=defaultvalue1, parameter2:type=defaultvalue2,...) {
   //
}

// The following example uses default parameters for the applyDiscount() function:

function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

// Notice that you cannot include default parameters in function type definitions. The following code will result in an error:

// let promotion: (price: number, discount: number = 0.05) => number;

// Error: error TS2371: A parameter initializer is only allowed in a function or constructor implementation.

// Default parameters and Optional parameters
// Like optional parameters, default parameters are also optional. It means that you can omit the default parameters when calling the function.

// In addition, both the default parameters and trailing default parameters share the same type. For example, the following function:

function applyDiscount(price: number, discount: number = 0.05): number {
  // ...
}

// and

function applyDiscount(price: number, discount?: number): number {
  // ...
}

// share the same type:

(price: number, discount?: number) => number

// Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters.

// When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.

// The following function returns the number of days in a specified month and year:

function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

// In this example, the default value of the year is the current year if you don’t pass an argument or pass the undefined value.

// The following example uses the getDay() function to get the number of days in Feb 2019:

let day = getDay(2019, 2);
console.log(day); // 28

// To get the number of days in Feb of the current year, you need to pass undefined to the year parameter like this:

let day = getDay(undefined, 2);
console.log(day);