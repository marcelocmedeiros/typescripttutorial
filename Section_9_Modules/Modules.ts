// Since ES6, JavaScript started supporting modules as the native part of the language. TypeScript shares the same module concept as JavaScript.

// A TypeScript module can contain both declarations and code. A module executes within its own scope, not in the global scope. It means that when you declare variables, functions, classes, interfaces, etc., in a module, they are not visible outside the module unless you explicitly export them using export statement.

// On the other hand, if you want to access variables, functions, classes, etc., from a module, you need to import them using the import statement.

// Like ES6, when a TypeScript file contains a top-level import or export, it is treated as a module.

// Creating a new module
// The following creates a new module called Validator.ts and declares an interface named Validator:

export interface Validator {
    isValid(s: string): boolean
}

// In this module, we place the export keyword before the interface keyword to expose it to other modules.

// In other words, if you do not use the export keyword, the Validator interface is private in the Validator.ts module, therefore, it cannot be used by other modules.

// Export statements
// Another way to export a declaration from a module is to use the export statement. For example:

interface Validator {
    isValid(s: string): boolean
}

export { Validator };

// TypeScript also allows you to rename declarations for module consumers, like this:

interface Validator {
    isValid(s: string): boolean
}

export { Validator as StringValidator };

// In this example, other modules will use the Validator interface as the StringValidator interface.

// Importing a new module
// To consume a module, you use the import statement. The following creates a new module EmailValidator.ts that uses the Validator.ts module:

import { Validator } from './Validator';

class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };

// When you import a module, you can rename it like this:

// import { Validator as StringValidator } from './Validator';

// Inside the EmailValidator module, you use the Validator interface as the StringValidator interface instead:

import { Validator as StringValidator } from './Validator';

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };

// The following illustrates how to use the EmailValidator module in the App.ts file:

import { EmailValidator } from './EmailValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);

// Output: true

// Importing types
// The following declares a type called in Types.ts module:

export type alphanumeric = string | number;

// To import the alphanumeric type from the Types.ts module, you can use the import type statement:

import type {alphanumeric} from './Types';

// Note that TypeScript has supported the import type statement since version 3.8. Prior to TypeScript 3.8, you need to use the import statement instead:

import {alphanumeric} from './Types';

// Importing everything from a module
// To import everything from a module, you use the following syntax:

import * from 'module_name';

// Re-exports
// The following creates a new module called ZipCodeValidator.ts that uses the Validator.ts module:

import { Validator } from './Validator';

class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator };

// You can wrap the EmailValidator and ZipCodeValidator modules in a new module by combining all their exports using the following syntax:

export * from 'module_name';

// The following example illustrates how to wrap the EmailValidator.ts and ZipCodeValidator.ts modules in the FormValidator.ts module:

export * from "./EmailValidator";
export * from "./ZipCodeValidator";

// Default Exports
// TypeScript allows each module to have one default export. To mark an export as a default export, you use the default keyword.

// The following shows how to export the ZipCodeValidator as a default export:

import { Validator } from './Validator';

export default class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 5 && numberRegexp.test(s);
    }
}

// To import a default export, you use a different import syntax like this:

// import default_export from 'module_name';

// The following shows how to use the default export from the ZipCodeValidator in the App.ts file:

import ZipCodeValidator from './ZipCodeValidator';

let validator = new ZipCodeValidator();
let result = validator.isValid('95134');

console.log(result);

// Output: true

// Summary
// TypeScript shares the same module concept with the ES6 module. A module can contain both declarations and code.
// In a module, variables, functions, classes, interfaces, etc., execute on their own scope, not the global scope.
// Use export statement to export variables, functions, classes, interfaces, types, etc., from a module.
// Use import statement to access exports from other modules.
