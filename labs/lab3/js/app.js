//A simple application using templates
// class VirtualPet {
//     constructor(name) {
//         this.name = name;
//         this.hunger = 50;
//         this.energy = 100;
//     }

//     render() {
//         return `
//         <div>${this.name}</div>
//         <div>Hunger: ${this.hunger}</div>
//         <div>Energy: ${this.energy}</div>
//         `;
//     }

//     feed() {
//         this.hunger--;
//     }
// }

// let myPet = new VirtualPet("Gidget");
// let petDiv = document.getElementById("petDiv");
// petDiv.innerHTML = myPet.render();

// function feedPet() {
//     myPet.feed();
//     //this updates the front page 
//     petDiv.innerHTML = myPet.render();
// }

class VendingMachine {
    constructor(name) {
        this.name = name;
        this.firstCandy = 10;
        this.secondCandy = 10;
        this.firstChips = 10;
    }

    render() {
        return `
        <div> ${this.name}</div>
        <div>Snickers: ${this.firstCandy}</div>
        <div>Skittles: ${this.secondCandy}</div>
        <div>Lays: ${this.firstChips}</div>
        `;
    }

    purchaseSnickers() {
        if(this.firstCandy >= 0) {
            this.firstCandy--;
        } else {
            console.log("Sold Out!");
        }
    }

    purchaseSkittles() {
        if(this.secondCandy >= 0) {
            this.secondCandy--;
        } else {
            console.log("Sold out!");
        }
    }

    purchaseLays() {
        if(this.firstChips >= 0) {
            this.firstChips--;
        } else {
            console.log("Sold Out!")
        }
    }
}

let myVendingMachine = new VendingMachine(" 'Steals Quarters' Vending Machine");
let vendingDiv = document.getElementById("vendingDiv");
vendingDiv.innerHTML = myVendingMachine.render();

function buying1() {
    myVendingMachine.purchaseSkittles();
    vendingDiv.innerHTML = myVendingMachine.render();
}

function buying2() {
    myVendingMachine.purchaseSnickers();
    vendingDiv.innerHTML = myVendingMachine.render();
}

function buying3() {
    myVendingMachine.purchaseLays();
    vendingDiv.innerHTML = myVendingMachine.render();
}