//Templates display object state
let song = {
    name: "Wake Me Up",
    artist: "Avicii",
    album: "True",
    duration: "4:09"
};

let game = {
    title: "Among Us",
    publisher: "InnerSloth",
    developer: "InnerSloth",
    engine: "Unity"
};







{/* <div>
<h3>{{ name }}</h3>
<div>{{ duration }}</div>
<div>
    <span>{{ artist }} -</span>
</div>
</div> */}

//Templates Display Class State - Over time 
class Song {
    constructor(name, artist, album, duration) {
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.playTime = 0;
    }

    updateTime() {
        this.playTime++;
    }

    updateDisplay() {
        //later in presentation
    }
}

class Game {
    constructor(title, publisher, developer, engine) {
        this.title = title;
        this.publisher = publisher;
        this.developer = developer;
        this.engine = engine;
        this.gameTime = 0;
    }


    updateTime() {
        this.gameTime++;
    }
}



{/* <div>
    <h3>{{ name }}</h3>
    <div>
        {{ playTime }}
        / {{ duration }}
    </div>
    <div>
        <span>{{ artist }} -</span>
    </div>
</div> */}

//Making and Using Templates
// var item = {
//     name: "Shovel",
//     graphic: "img/shovel.png"
// }

// var temp = document.getElementById("iitem");
// var clone = temp.content.cloneNode(true);

// clone.querySelector(".name").innerHTML = item.name;
// clone.querySelector(".igraphic").setAttribute("src", item.graphic);

// console.log(clone);
// document.body.appendChild(clone);

// let king = {
//     age: 50,
//     disposition: "dour"
// }

// let templateStr = `
//     <h2>King Stats<h2>
//     <ul>
//     <li>Age: ${king.age}</li>
//     <li>Disposition: ${king.disposition}</li>
//     <ul>
//     `;

// let newContainer = document.createElement("div");
// newContainer.innerHTML = templateStr;

// document.body.appendChild( newContainer );

// var HealthPotion = {
//     name: "Health Potion",
//     graphic: "img/potion.png"
// }

// var temp = document.getElementById("ipotion");
// var clone = temp.content.cloneNode(true);

// clone.querySelector(".name").innerHTML = HealthPotion.name;
// clone.querySelector(".igraphic").setAttribute("src", HealthPotion.graphic);

// document.body.appendChild(clone);



//A simple application using templates
class VirtualPet {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
        this.energy = 100;
    }

    render() {
        return `
        <div>${this.name}</div>
        <div>Hunger: ${this.hunger}</div>
        <div>Energy: ${this.energy}</div>
        `;
    }

    feed() {
        this.hunger--;
    }
}

let myPet = new VirtualPet("Gidget");
let petDiv = document.getElementById("petDiv");
petDiv.innerHTML = myPet.render();

function feedPet() {
    myPet.feed();
    //this updates the front page 
    petDiv.innerHTML = myPet.render();
}