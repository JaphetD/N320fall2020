// let txtStatInput = document.getElementById("txtStatInput");

// function textFocus() {
//     resetAnimation(txtStatInput);
//     txtStatInput.classList.remove("deselected");
//     txtStatInput.classList.add("selected");
// }

// function textLeave() {
//         resetAnimation(txtStatInput);
//         txtStatInput.classList.remove("selected");
//         txtStatInput.classList.add("deselected");

// }

// //resets the animation
// function resetAnimation(el) {
//     el.style.animation = 'none';
//     el.offsetHeight; /*trigger reflow */
//     el.style.animation = null;
// }



let exampleDiv = document.getElementById("TxtisVeryCool");
TweenMax.to(exampleDiv, {duration: 2, x: 1000, y: 1000, backgroundColor: "crimson"});

let navItems = document.getElementById("nav");

TweenMax.from(navItems, { duration: 1, x:-100, alpha: 0 });

//Doing this to grab all of the items in the ul even if we add more 
// for(let i = 0; i < navItems.length; i++) {
//     TweenLite.from(navItems[i], 
//         { duration: .6, x: -100, alpha: 0 , delay: i * .1}
//     );

// }