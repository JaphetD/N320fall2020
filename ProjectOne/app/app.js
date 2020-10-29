//Getting access to the board
// let board = document.getElementsByClassName(".chessboard");

// console.log(board, 22);

//Tried to add the board svg squares to an array from an example from the internet.
// board = [
//     null, 0, null, 1, null, 2, null, 3,
//     4, null, 5, null, 6, null, 7, null, 
//     null, 8, null, 9, null, 10, null, 11,
//     null, null, null, null, null, null, null, null,
//     null, null, null, null, null, null, null, null,
//     12, null, 13, null, 14, null, 15, null, 
//     null, 16, null, 17, null, 18, null, 19,
//     20, null, 21, null, 22, null, 23, null

// ];


//Getting access to the red pieces on the board for movement
let firstRedPiece = document.getElementById("redPieceOne");
let secondRedPiece = document.getElementById("redPieceTwo");
let thirdRedPiece = document.getElementById("redPieceThree");
let fourthRedPiece = document.getElementById("redPieceFour");
let fifthRedPiece = document.getElementById("redPieceFive");
let sixthRedPiece = document.getElementById("redPieceSix");
let seventhRedPiece = document.getElementById("redPieceSeven");
let eighthRedPiece = document.getElementById("redPieceEight");
let ninthRedPiece = document.getElementById("redPieceNine");
let tenthRedPiece = document.getElementById("redPieceTen");
let elevenRedPiece = document.getElementById("redPieceEleven");
let twelveRedPiece = document.getElementById("redPieceTwelve");

// console.log(twelveRedPiece);
// console.log(nineRedPiece)
// console.log(firstRedPiece)

//These are the pieces for the white side ( most are just given an onclick for automation)
let firstWhitePiece = document.getElementById("whitePieceOne");
let secondWhitePiece = document.getElementById("whitePieceTwo");
let thirdWhitePiece = document.getElementById("whitePieceThree");
let fourthWhitePiece = document.getElementById("whitePieceFour");
let fifthWhitePiece = document.getElementById("whitePieceFive");
let sixthWhitePiece = document.getElementById("whitePieceSix");
let seventhWhitePiece = document.getElementById("whitePieceSeven");
let eighthWhitePiece = document.getElementById("whitePieceEight");
let ninethWhitePiece = document.getElementById("whitePieceNine");
let tenthWhitePiece = document.getElementById("whitePieceTen");
let eleventhWhitePiece = document.getElementById("whitePieceEleven");
let twelfthPiece = document.getElementById("whitePieceTwelve");


// let board = dpcument.getElementById("chessboard");


//Giving the first white piece an onclick function movement
firstWhitePiece.addEventListener("click", onTrailClick3);

function onTrailClick3() {
    TweenMax.to(firstWhitePiece, {duration: 1, x:30, y:24.5, onComplete:(paused=true)});

}

//Giving the second White piece an onclick function for movement
secondWhitePiece.addEventListener("click", onTrailClick4);
secondWhitePiece.addEventListener("click", onTrailClick5);

//Third White Piece movement 
thirdWhitePiece.addEventListener("click", onTrailClick7);

function onTrailClick4() {
    TweenMax.to(secondWhitePiece, {duration: 1, x:30, y:24.5});
}

console.log(secondWhitePiece)

function onTrailClick5() {
    TweenMax.to(secondWhitePiece,  {duration:1, x:-30, y:73});
}

function onTrailClick7() {
    TweenMax.to(thirdWhitePiece, { duration:1, x:30, y:24.5})
}
console.log(thirdWhitePiece)



 

//Giving the first red piece an onclick function (Movement)
firstRedPiece.addEventListener("click", onTrailClick);
function onTrailClick() {
    TweenMax.to(firstRedPiece, {duration: 1, x:30, y:-24.5,onComplete:(onTrailClick4)});
}


//Giving the second red piece an onclick function for movement
secondRedPiece.addEventListener("click", onTrailClick2);

function onTrailClick2() {
    TweenMax.to(secondRedPiece, {duration: 1, x:30, y:-24.5, onComplete:(onTrailClick3)});
}

//Giving the third red piece an onclick function for movement
//I am also automating the white side's moving using an OnComplete function from gsap
thirdRedPiece.addEventListener("click", onTrailClick6);

function onTrailClick6() {
    TweenMax.to(thirdRedPiece, {duration:1 , x:30, y:-24.5, onComplete:(onTrailClick7)})
}

console.log(thirdRedPiece);

//Giving the fifth red piece an onclick function for movement 
fifthRedPiece.addEventListener("click", onTrailClick8);

function onTrailClick8() {
    TweenMax.to(fifthRedPiece, {duration:1, x:30, y:-24.5})
}









//Double click event listener 
firstRedPiece.addEventListener("dblclick", ondblclick);
secondRedPiece.addEventListener("dblclick", ondblclick2);
firstWhitePiece.addEventListener("dblclick", ondblclick3);

//Double click will remove the piece 
function ondblclick() {
    TweenLite.to(firstRedPiece, 1,{autoAlpha: 0,display: "none"});
}

function ondblclick2() {
    TweenLite.to(secondRedPiece, 1,{autoAlpha: 0,display: "none"});
}

function ondblclick3() {
    TweenLite.to(firstWhitePiece, 1,{autoAlpha: 0,display: "none"});
}


