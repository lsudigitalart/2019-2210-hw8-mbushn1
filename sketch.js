frameRate=60
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  background("black");
  creature();
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(60,60,60)
  pointLight(255, 255, 255, locX, locY, 100);
}  

function creature(){
orbitControl();
  normalMaterial(250);
  
  push();
  translate(0,-150)
  box(110,110,110,110);
  pop()

  push();
  translate(0,0)
  torus(80,30);
  pop();

  push();
  translate(35,160)
  box(30,200,30,30);
  pop();

  push();
  translate(-35,160)
  box(30,200,30,30);
  pop();
  
  push();
  rotateZ(45);
  translate(-75,120);
  box(30,200,30,30);
  pop();

  push();
  rotateZ(90);
  translate(-70,-130);
  box(30,200,30,30);
  pop();

  
  


}