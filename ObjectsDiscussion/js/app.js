var book1 = {
    name: "The Giver",
    pages: 192,
    Publisher: "HMH Books",
    Series: "Giver Quartet Series",
}

// console.log(book1);

class book {
    constructor(name, pages, publisher, series) {
        this.name = name;
        this.pages = pages;
        this.publisher = publisher;
        this.series = series;
    }

}

var TheGiver = new book("The Giver", 192, "HMH Books", "Giver Quartet Series");

console.log(TheGiver);

class HarryPotter extends book {
    constructor(name, pages){
        super(name, pages);
        this.publisher = "Bloomsbury";
    }
}

let SorcererStone = new HarryPotter("The Sorcerer's Stone", 223, "Bloomsbury"); 

console.log(SorcererStone);