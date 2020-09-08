
class RainDrop {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
    }
  
update() {
    this.y ++;
    let c = this.color = ('#81aef7');
    fill(c);
    circle( this.x, this.y, this.radius, this.color);
}
}
class Ground {
      constructor(gx, gy, radius, color) {
        this.x = gx;
        this.y = gy;
        this.radius = radius;
        this.color = color;
      }
      update2() {
        let x = this.color = ('#81aef7');
        fill(x);
        rect(this.x, this.y, this.radius);
      }
    }


var Blueground = [];
var myRainDrops = [];
var arrayLength = myRainDrops.length;
Blueground = new Ground(-1, 300, 800, 300 [66, 135, 245]);
myRainDrops[0] = new RainDrop(1, 10, 100, [166, 214, 222]);
myRainDrops[1] = new RainDrop(250, -300, 100, [166, 214, 222]);
myRainDrops[2] = new RainDrop(155, -150, 100, [166, 214, 222]);
myRainDrops[3] = new RainDrop(300, -500, 100, [166, 214, 222]);
myRainDrops[4] = new RainDrop(100, -400, 100, [166, 214, 222]);
myRainDrops[5] = new RainDrop(170, -600, 100, [166, 214, 222]);
myRainDrops[6] = new RainDrop(350, -100, 100, [166, 214, 222]);
myRainDrops[7] = new RainDrop(500, -90, 100, [166, 214, 222]);
myRainDrops[8] = new RainDrop(450, -200, 100, [166, 214, 222]);
myRainDrops[9] = new RainDrop(250, -499, 100, [166, 214, 222]);
myRainDrops[10] = new RainDrop(200, -500, 100, [166, 214, 222]);

// console.log(myRainDrop);
var arrayLength = myRainDrops.length;
function setup() {
    createCanvas(720, 400);
    
  }
  
  function draw() {
    background(34, 32, 79);
    
    for(let i = 0; i < myRainDrops.length; i++){
    myRainDrops[i].update();
    i++;
    // console.log(myRainDrops[i]);
    Blueground.update2();

    myRainDrops.forEach(
      function (myRainDrop) {
        console.log(myRainDrop);
      }
    )

// rect(40, 120, 120, 40);

    // myRainDrop.y ++;
    //Kind of dated. The "circle" is referring to the actual shape not the actual class. Ex: Square could work there as well 
    // circle( myRainDrop.x, myRainDrop.y, myRainDrop.radius);
    
    //cx++;
    //RainDrop( 100, cx, 100);
  }
//   frameRate(5);
  }