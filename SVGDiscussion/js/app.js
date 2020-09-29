let mainRect = document.getElementById("mainRect");
let t = 0;

mainRect.addEventListener("click", onTrailClick);
function onTrailClick(event) {
    event.target.style.fill= "#00FF00";
    event.target.style.stroke = 5;
    event.target.style.width = 60;
    event.target.style.height = 200;

    
}


console.log(mainRect);


// //Animation 
// let rectY =Number(mainRect.getAttribute("y"));
// rectY = rectY - 10;

// mainRect.setAttribute("y", rectY);

//start animation
drawFrame(); 

function drawFrame() {
    //Consoles A 60 times a second(frames)
    // console.log("A");

    t++; 

let rectY =Number(mainRect.getAttribute("y"));
rectY += Math.sin(t/.031);


mainRect.setAttribute("y", rectY);

    requestAnimationFrame(drawFrame);
}



