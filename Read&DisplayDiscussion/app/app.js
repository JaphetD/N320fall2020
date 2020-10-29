Vue.component("div", {
    props: ["books"],
    template:
})
axios.get('data/data.json')
    .then(function (response) {
        //handle success
        console.log(response);
    })


    fetch('data/data.json')
        .then(response => response.json())
        .then(data => console.log(data));


new Vue({
    el: "#app",
    data: function () {
        return {
            books: null,
        };
    },
    mounted: function() {
        fetch("data/data.json")
        .then((response) => response.json())
        .then((jsonData) => {
            this.books = jsonData
        })
    }
})

//An example of JSON Data with an array 
// {
//     "name": "The Flood",
//     "year": 1990,
//     "tracks": [
//         "Birdhouse in Your Soul", " Minimum Wage", "Twisting", "Particle Man"
//     ]
// }

//Complex Data structure 
// [
//     {
//         owner:"Thomas", make:"Jensen", cost:33,
//         contents: [
//             { type: "pen", weight: 4}, {type:"book", weight:40}
//         ]
//     },
//     {
//         owner:"Sarah", make: "REI", cost:70,
//         contents: [
//             { type: "light", weight:15}, {type:"rope", weight:20}
//         ]
//     }
// ]


//Data structure of a tic - tac - toe board 
// [
//     [ {}, { "player": "x", "move": 1 }, {} ],
//     [ {}, {}, {} ],
//     [ {}, {}, { "player":"o", "move": 2 } ]

// ]