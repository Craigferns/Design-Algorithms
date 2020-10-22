
var fixedRectangle;
var movingRectangle;

function setup() {
  createCanvas(800,400);
  
  fixedRectangle = createSprite(400, 200, 50, 90);
  fixedRectangle.shapeColor = ("blue");

  movingRectangle = createSprite(600, 200, 90, 50);
  movingRectangle.shapeColor = ("green");

  fixedRectangle.debug = true;
  movingRectangle.debug = true;

}

function draw() {
  background(64,224,208);  

  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;

  if(movingRectangle.x - fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
    && fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
    && movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2
    && fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2
    
    ){
     movingRectangle.shapeColor = "red";
     fixedRectangle.shapeColor = "red";
  }
   else {   
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "blue";
   }

  drawSprites();
}