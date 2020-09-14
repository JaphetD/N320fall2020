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

class Grunt {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

class SmallerGrunt extends Grunt {
    constructor(health) {
        super(health, 100);
    }
}

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

//2nd Abstraction example 
class Game {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }
    GameCartridge() {
        return "The title of the cartridge is " + this.title + " and the genre of the cartridge is " + this.genre;
    }
}

let game = new Game("The Witcher 3", "Action role-playing game.")
let Witcher = game.GameCartridge();
console.log(Witcher);

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

//2nd Encapsulation Example
class HealthBar {
    constructor() {
        this.health = 100;
    }

    setHealth(newHealthAmount) {
        if(newHealthAmount >= 0){
            this.health = newHealthAmount
        } else {
            console.error("You Died...");
        }
    }

    getHealth() {
        return this.health;
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

class Potion {
    constructor(health) {
        this.health = health;
    }

    restorehealth() {
        console.log("You regained " + this.health + " health!");
    }
}

class SmallPotion extends Potion {
    constructor() {
        super(20);
    }
}

class LargePotion extends Potion {
    constructor() {
        super(300);
    }
}

let potions = [];
potions[0] = new SmallPotion();
potions[1] = new LargePotion();

potions.forEach(
    function (Potion) {
        Potion.restorehealth();
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
// class Cloud {
//     constructor(type, speed) {
//         this.height = 4;
//         this.type = type;
//         this.speed = milesSpeed * 1.60934;
//     }
// }

// class Altocumulus extends Cloud {
//     constructor() {
//         super("Altocumulus", 2);

//         this.fluffiness = 100;
//     }
// }

// class Cirrus extends Cloud {
//     constructor() {
//         super("Cirrus", 2);

//         this.mileSize = 100;
//     }
// }

// let c = new Cloud("Cirrus");
// console.log(c);

// let c2 = new Cloud("Altocumulus");
// console.log(c2);

//Aggregation Example also an example of Composition 
class Guitar {
    constructor(make, strings, acoustic) {
        this.make = make;
        this.strings = strings;
        this.acoustic = acoustic;
    }

    strumOpen() {
        this.strings.forEach(string => {
            console.log(string.note + " Plays");
        });
    }
}

class String {
    constructor(note, octave) {
        this.note = note;
        this.octave = octave;

    }
}

var strings = [];
strings[0] = new String("E", 4);
strings[1] = new String("A", 4);
strings[2] = new String("D", 4);

//This is a stub. Outline of code that does not have any errors.
var myGuitar = new Guitar("Gibson", strings, false);

myGuitar.strumOpen();

//Invoking other object's method 
class Water {
    constructor() {
        this.amount = 100;
    }
    drain() {
        this.amount -=5;
        console.log("Water drained, new amount: " + this.amount);
    }
}

//Class cloud 
//takes an instance of the Water class to drain from..
class Cloud {
    constructor(water) {
        //remember instance of the water class
        this.water = water;
        this.size = 10;
    }

    grow() {
        this.water.drain();
        this.size++;
        console.log("Cloud gew to: " + this.size);
    }
}

let someWater = new Water();
let someCloud = new Cloud(someWater);
someCloud.grow();
someCloud.grow();
someCloud.grow();
someCloud.grow();


//Exposing a callback method
class Firework {
    constructor() {
        this.fuse = 12;
    }

    burnFuse() {
        this.fuse--;
        if( this.fuse <= 0) {
            this.activatedCallback();
        }
    }
}

class Crowd {
    constructor(fireworkInstance) {
        fireworkInstance.activatedCallback = this.marvel;
    }

    marvel() {
        console.log("Oooh, and, aaahh");
    }
}

let myFirework = new Firework();
let myCrowd = new Crowd(myFirework);

for( var i = 0; i < 14; i++) {
myFirework.burnFuse();

}

//Passing through a higher object 
class Employee {
    constructor(name, emManager) {
        this.name = name;
        this.manager = emManager;
    }

    quit() {
        this.manager.employeeQuit();
    }

    moveOut() {
        console.log(this.name + "says: Never liked this job anyway!")
    }

    hire(){
        console.log(this.name + ", 'My dream job!'");
    }
}

class Manager {
    constructor() {
       this.employees = [];
    }

    addEmployee(em) {
        this.employees.push(em);
        console.log(this.employees);
    }

    employeeQuit() {
        this.employees[0].moveOut();
        this.employees[1].hire();
    }
}

let manager = new Manager();
let emPloyee1 = new Employee("Nick", manager);
let emPloyee2 = new Employee("Garth", manager);
manager.addEmployee(emPloyee1);
manager.addEmployee(emPloyee2);
emPloyee1.quit();
