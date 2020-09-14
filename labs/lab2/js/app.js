class instrument {
    constructor(loudness,family,verb) {
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }
    playInstrument() {
        console.log(this.family + this.verb + this.loudness)
    }
}

class Woodwind extends instrument {
    constructor(family, verb){
        super(10,family, verb) 
    }
}

class Percussion extends instrument {
    constructor(family, verb) {
        super(30,family,verb)
    }
}

class Stringed extends instrument {
    constructor(family, verb) {
        super(100, family, verb)
    }
}

let instruments = [];
instruments[0] = new Woodwind("Whistle ","Blowed ");
instruments[1] = new Percussion("Drum ", "drummed ");
instruments[2] = new Stringed("Guitar ", "Strung ");

instruments.forEach(
    function (instrument) {
        instrument.playInstrument();
    }
)
// let Mywoodwind = new Woodwind("Whistle ","Blowed ");
// let Mypercussion = new Percussion("Drum ", "drummed ")
// let Mystringed = new Stringed("Guitar ", "Strung ");

// Mywoodwind.playInstrument();
// Mypercussion.playInstrument();
// Mystringed.playInstrument();

