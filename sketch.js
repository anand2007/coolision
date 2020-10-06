var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,200,30,40);
  movingRect.shapeColor = "green";
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2&&
    fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else 
  {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  
  drawSprites();
}