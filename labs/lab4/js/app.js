let blackSquare = document.getElementById("blackSquareOne");
let t = 0;

console.log(blackSquare);

blackSquare.addEventListener("click", onTrailClick);
function onTrailClick(event) {
    event.target.style.fill = "red";
}

console.log(onTrailClick);

blackSquare.addEventListener("dblclick",ondblclick);

function ondblclick(event) {
    event.target.style.fill = "blue";
}


drawFrame();

function drawFrame() {
    t++;

    let rectY = Number(blackSquare.getAttribute("y"));
    let rectX = Number(blackSquare.getAttribute("x"));
    rectY += Math.sin(t/2);
    rectX += Math.sin(t/2);

    blackSquare.setAttribute("y", rectY);
    blackSquare.setAttribute("x", rectX);

    requestAnimationFrame(drawFrame);
}