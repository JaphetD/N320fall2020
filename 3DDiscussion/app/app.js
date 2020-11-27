//In Javascript
var canvas = document.getElementById("renderCanvas");

//Goes in the global scope 
//Create the 3D engine
var engine = new BABYLON.Engine(canvas,true);
var camera, scene;
var sphere, light;
var t = 0;

scene = createScene();

engine.runRenderLoop(function () {
    t+= 0.03;
    light.intensity = 1 + Math.sin(t);
    scene.render();
});

//---------------------------------------------
//Helper functions
//---------------------------------------------

function createScene () {
    //Create the scene space
    var scene = new BABYLON.Scene(engine);
    //Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .7}, scene);
    var lesserSphere = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter:.2},scene);
    lesserSphere.position.x = 1;

    sphere.addChild(lesserSphere);

    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1,1,0), scene);

    light.diffuse = new BABYLON.Color3(1,0,0);
    light.specular = new BABYLON.Color3(0,0,0);
    light.groundColor = new BABYLON.Color3(0,1,0);
    // //add ground
    // var ground = BABYLON.MeshBuilder.CreateGround("ground", {height:4, width:4,subdivisions:4},scene);

    // //add light 
    // var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0,-0.5,1.0), scene);

    return scene;
};

var scene = createScene();