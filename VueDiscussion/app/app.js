//Components always go at the top 
Vue.component("coffee-view", {
    props:[ "coffee" ],
    template: "<li>{{ coffee.name }} : ${{coffee.price }} ! </li>"
})

//Basic Vue message
let app = new Vue({
    el: "#app",
    //variables have to be exactly the same
    data: { 
        purchases: 0,
        message: "Coffee Types",
        //False won't show the button, true will. v-if
        ready: true,
        //Made an array for looping 
        coffees: [
        { id:0, price: 5, name: "Starbucks"}, 
        { id:2, price:10, name: "Death Wish Coffee" }, 
        { id: 40, price:15, name: "Blue Mountain" }, 
        // { "Five O' Clock" }
    ]
},
methods: {
    buyCoffee: function() {
        // console.log("It works")
        //Two way data binding
        this.purchases += 1;
    }
}
});

// data: {
//     todos: [ { text: 'Todo 1'}, { text: 'Twodoo'}, {text: 'Un plus'}]
// }