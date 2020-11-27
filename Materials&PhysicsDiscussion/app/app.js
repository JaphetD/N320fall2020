var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);
var camera, mat;
var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();


var scene = createScene();
engine.runRenderLoop(function () {
    scene.render();

    // //animating the texture
    // mat.diffuseTexture.vScale+= .01;

    // mat.diffuseTexture.uScale+= .01;



});

window.addEventListener("click", function () {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var pushDir = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget()).direction;

    pushDir = pushDir.scale(100);
    pickResult.pickedMesh.physicsImpostor.applyForce(
        pushDir,
        pickResult.pickedMesh.getAbsolutePosition()
    );
})

function createScene () {
    //Create the scene space
    var scene = new BABYLON.Scene(engine);
    scene.enablePhysics(gravityVector, physicsPlugin);

    //Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    //General setup
    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .3}, scene);
    sphere.position = new BABYLON.Vector3(0,1, 0);
    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1,1,0), scene);


    //Adding the material(texture) (Sphere stuff)
    mat = new BABYLON.StandardMaterial("base", scene);
    mat.diffuseTexture = new BABYLON.Texture("img/texture.jpg",scene);
    mat.specularColor = new BABYLON.Color3(0.6,1.0,0.1);
    mat.ambientColor = new BABYLON.Color3(0.23,0.98,0.53);
    sphere.material = mat;

    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, {mass:1, restitution:1}, scene);

    
   sphere.physicsImpostor.physicsBody.linearDamping = .6;
   sphere.physicsImpostor.physicsBody.angularDamping = .5;

   sphere.friction = 2;

    //ground
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 4, width: 4, subdivisions: 4}, scene);

    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {mass:0, restitution: 0.9}, scene);

    ground.physicsImpostor.friction = 10;

    sphere.physicsImpostor.applyForce(
       new BABYLON.Vector3(1000, 10000, -1000),
        sphere.getAbsolutePosition()

    );
    

    return scene;
};