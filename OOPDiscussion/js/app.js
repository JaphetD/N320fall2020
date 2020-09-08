//Making an object in JavaScript
class Opinion {
    constructor() {
        this.type = "An";
    }


method() {
    this.type = "Validated";
}
}

//Inheritance Example 
class Note {
    constructor(pitch,duration) {
        this.pitch = pitch;
        this.duration = duration;
    }
}

class FullNote extends Note {
    constructor(pitch) {
        super(pitch, 1);
    }
}

class HalfNote extends Note {
constructor(pitch) {
    super(pitch, .5);
}
}

let aHalfNote = new HalfNote(880);
let aFullNote = new FullNote(720);

console.log(aFullNote);

//Abstraction Example 
class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    magnitude() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}
//Don't need to know HOW magnitude was implemeneted, just that it works.
let velo = new Vector(10, 5);
let speed = velo.magnitude();
console.log(speed);

//Encapsulation Example 
class Engine {
    constructor() {
        this.oil = 10;
    }

SetOil(newOilAmount) {
    if(newOilAmount >= 0) {
        this.oil = newOilAmount
    } else {
        console.error("Cannot set negative oil");
    }
}

getOil() {
    return this.oil;
}
}

//Polymorphism Example 
class Book {
    constructor(pages) {
        this.pages = pages;
    }

    read() {
        console.log(" You just read " + this.pages + " pages!");
    }
}

class Novel extends Book {
    constructor() {
        super(300)
    }
}

class Comic extends Book {
    constructor() {
        super(16);
    }
}

let books = [];
books[0] = new Comic();
books[1] = new Novel();

books.forEach(
    function (book) {
    book.read();
}
)

//Association Example 
class Dog {
    constructor(name) {
        this.name = name;
    }

    play(ball) {
        ball.catch(this);
    }
}

class Ball {

    constructor(color) {
        this.color = color;
    }

    catch(dog) {
        console.log(dog.name + ' caught a ' + this.color + ' ball!');
    }
}

let dog = new Dog ("Difo");
let ball = new Ball("red");
let ball2 = new Ball("blue")

dog.play(ball2);

//More extending/Super class Example
class Cloud {
    constructor(type, speed) {
        this.height = 4;
        this.type = type;
        this.speed = milesSpeed * 1.60934;
    }
}

class Altocumulus extends Cloud {
    constructor() {
        super("Altocumulus", 2);

        this.fluffiness = 100;
    }
}

class Cirrus extends Cloud {
    constructor() {
        super("Cirrus", 2);

        this.mileSize = 100;
    }
}

let c = new Cloud("Cirrus");
console.log(c);

let c2 = new Cloud("Altocumulus");
console.log(c2);

