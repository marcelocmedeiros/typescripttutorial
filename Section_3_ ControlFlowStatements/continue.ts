// The continue statement is used to control a loop such as a for loop, a while loop, or a do...while loop.

// The continue statement skips to the end of the loop and continues the next iteration.

// Using the TypeScript continue statement inside a for loop
// The following example illustrates how to use the continue statement inside a for loop:

for (let index = 0; index < 9; index++) {
    
    // if index is odd, skip it
    if (index % 2)
        continue;

    // the following code will be skipped for odd numbers
    console.log(index);
}

// Output:

// 0
// 2
// 4
// 6
// 8

// In this example:

// First, loop over the numbers from 0 to 9.
// Then, if the current number is an odd number, skip outputting the number to the console by using the continue statement. In case the current number is an even number, output it to the console.

// Using the TypeScript continue statement inside a while loop
// The following example shows how to use the continue statement in a while loop. It returns the same result as the above example.

let index = -1;

while (index < 9) {

    index = index + 1;

    if (index % 2)
        continue;

    console.log(index);
}

// Output:

// 0
// 2
// 4
// 6
// 8   

// Using the TypeScript continue statement inside a do while loop
// The following example demonstrates how to use the continue statement in a do...while loop. It returns the number of even numbers from 9 to 99:

let index = 9;
let count = 0;

do {
    index += 1;

    if (index % 2)
        continue;
    count += 1;
} while (index < 99);


console.log(count); // 45