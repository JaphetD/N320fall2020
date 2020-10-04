let galleryDiv = document.getElementById("gallery");
let galleryDivTwo = document.getElementById("galleryTwo");
let Title = document.getElementById("title");
let Rect = document.getElementById("blueRect");

let galleryContentDiv = document.getElementById("galleryContent1");
let galleryContentDiv2 = document.getElementById("galleryContent2");
let galleryContentDiv3 = document.getElementById("galleryContent3");
let galleryContentDiv4 = document.getElementById("galleryContent4");
let galleryContentDiv5 = document.getElementById("galleryContent5");
let galleryContentDiv6 = document.getElementById("galleryContent6");







//Gallery One
TweenMax.from(galleryDiv, { duration: 3, alpha: 0, delay: 2.5});

//Gallery Two
TweenMax.from(galleryDivTwo, { duration: 3, alpha: 0, delay:3});

//Title
TweenMax.from(Title, { duration: 3, alpha: 0, delay:1});

//Blue rectangle
TweenMax.from(Rect, { duration: 3, alpha: 0, delay:2});

// galleryDiv.onmouseover = function() {
//     TweenLite.from(galleryDiv, { duration:1, backgroundColor:"white", opacity: .8});
// }

// galleryDiv.onmouseleave = function() {
//     TweenMax.to(galleryDiv,{backgroundColor:"none"});
// }

 
     galleryContentDiv.onmouseover = function() {
    TweenMax.from(galleryContentDiv, { duration:1, backgroundColor:"white", opacity: .8});
 }

 galleryContentDiv2.onmouseover = function() {
    TweenMax.from(galleryContentDiv2, { duration:1, backgroundColor:"white", opacity: .8});
 }

 galleryContentDiv3.onmouseover = function() {
    TweenMax.from(galleryContentDiv3, { duration:1, backgroundColor:"white", opacity: .8});
 }

 galleryContentDiv4.onmouseover = function() {
    TweenMax.from(galleryContentDiv4, { duration:1, backgroundColor:"white", opacity: .8});
 }

 galleryContentDiv5.onmouseover = function() {
    TweenMax.from(galleryContentDiv5, { duration:1, backgroundColor:"white", opacity: .8});
 }

 galleryContentDiv6.onmouseover = function() {
    TweenMax.from(galleryContentDiv6, { duration:1, backgroundColor:"white", opacity: .8});
 }

 galleryContentDiv.onclick = function() {
     TweenMax.to(galleryContentDiv, {duration:.6, x:3000, alpha: 0, delay:.1});
 }