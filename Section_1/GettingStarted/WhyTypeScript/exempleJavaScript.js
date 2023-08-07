// Why use TypeScript
// There are two main reasons to use TypeScript:

// TypeScript adds a type system to help you avoid many problems with dynamic types in JavaScript.
// TypeScript implements the future features of JavaScript a.k.a ES Next so that you can use them today.

// Understanding dynamic type in JavaScript
// See the following example:
let box1;
box1 = "hello";
box1 = 100;

// The type of the box variable changes based on the value assigned to it.

// To find the type of the box variable at runtime, you use the typeof operator:
let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number
// As you can see, as soon as the value is assigned, the type of the variable changes.

// And you don’t need to explicitly tell JavaScript the type. JavaScript will automatically infer the type from the value.

// Problems with dynamic types
// Suppose you have a function that returns a product object based on an id:

function getProduct(id){
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
}
// The following uses the getProduct() function to retrieve the product with id 1 and shows its data:

// const product = getProduct(1);
// console.log(`The product ${product.Name} costs $${product.price}`);  
// Output: The product undefined costs $99.5 

// It isn’t what we expected!!!

// Referencing a property that doesn’t exist on the object is a common issue when working in JavaScript.

// The following example defines a new function that outputs the product information to the Console:

const showProduct = (name, price)  => {
  console.log(`The product ${name} costs ${price}$.`);
};

// And the following uses the getProduct() and showProduct() functions:

const product = getProduct(1);
showProduct(product.price, product.name);

// Output: The product 99.5 costs $Awesome Gadget 1 

// This time we pass the arguments in the wrong order to the showProduct() function. This is another common problem that you often have when working with JavaScript.