Vue.component("book-view", {
    props: ["book"],
    template: "<p>{{ book.title }} <br> {{ book.cover}} <br> {{book.author}}  </p>"
});


let app = new Vue({
    el: "#app",
    data: {
        available:false,
        books: [
            { id:0, title: "Arthas: Rise of the Lich King", author: "Christie Golden", cover: "😃"},
            { id:1, title: "The Shattering: Prelude to Cataclysm", author: "Christie Golden", cover:"😸"},
            { id:2, title: "Twilight of the Aspects", author:" Christie Golden", cover:"🎃"}
        ]
    },
    methods: {
        hideBook: function() {
            data.books.props = false;
            console.log("It works");
        }
    }
})

let app2 = new Vue({
    el: "#app2",
    data: {
        hide:false,
        title: "The Titan's curse",
        author: "Rick Riordan",
        cover: "👾"
    }
})