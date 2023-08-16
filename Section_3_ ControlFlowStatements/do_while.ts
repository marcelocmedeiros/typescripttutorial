// The following shows the syntax of the do...while statement:

// do {
//     // do something
// } while(condition);

// The do...while statement executes statements in its body surrounded by the curly braces ({}) until the condition is false.

// The do...while statement always executes its loop body at least one.

// Unlike the while statement, the do...while statement evaluates the condition after each loop iteration, therefore, it is called a post-test loop.

// TypeScript do…while statement example
// The following example uses the do...while statement to output numbers from 0 to 9 to the console:

let i2 = 0;

do {
    console.log(i2);
    i2++
} while (i2 < 10);

// Output:

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// How it works:

// First, declare a variable i and initialize it to zero before entering the loop.
// Then, output i to the console, increment it by one, and check if it is less than 10. If it is, repeat the loop until i greater than or equal 10.
