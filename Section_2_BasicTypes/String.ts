// Like JavaScript, TypeScript uses double quotes (") or single quotes (') to surround string literals:

let firstName: string = 'John';
let title: string = "Web Developer";

// The template strings allow you to create multi-line strings and provide the string interpolation features.

// The following example shows how to create multi-line string using the backtick (`):

let description = `This TypeScript string can 
span multiple 
lines
`;

// String interpolations allow you to embed the variables into the string like this:

let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);