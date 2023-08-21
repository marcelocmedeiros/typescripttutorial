// Interfaces extending one interface
// Suppose that you have an interface called Mailable that contains two methods called send() and queue() as follows:

interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

// And you have many classes that already implemented the Mailable interface.

// Now, you want to add a new method to the Mailable interface that sends an email later like this:

later(email: string, after: number): void

// However, adding the later() method to the Mailable interface would break the current code.

// To avoid this, you can create a new interface that extends the Mailable interface:

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

// To extend an interface, you use the extends keyword with the following syntax:

interface A {
    a(): void
}

interface B extends A {
    b(): void
}

// The interface B extends the interface A, which then has both methods a() and b() .

// Like classes, the FutureMailable interface inherits the send() and queue() methods from the Mailable interface.

// The following shows how to implement the FutureMailable interface:

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

// Interfaces extending multiple interfaces
// An interface can extend multiple interfaces, creating a combination of all the interfaces. For example:

interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}

// In this example, the interface D extends the interfaces B and C. So D has all the methods of B and C interfaces, which are a(), b(), and c() methods.

// Interfaces extending classes
// TypeScript allows an interface to extend a class. In this case, the interface inherits the properties and methods of the class. Also, the interface can inherit the private and protected members of the class, not just the public members.

// It means that when an interface extends a class with private or protected members, the interface can only be implemented by that class or subclasses of that class from which the interface extends.

// By doing this, you restrict the usage of the interface to only classes or subclasses of the class from which the interface extends. If you attempt to implement the interface from a class that is not a subclass of the class that the interface inherited, you’ll get an error. For example:

class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
class Chart implements StatefulControl {
    enable() { }

}

// Summary
// An interface can extend one or multiple existing interfaces.
// An interface also can extend a class. If the class contains private or protected members, the interface can only be implemented by the class or subclasses of that class.