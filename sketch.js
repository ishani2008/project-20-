var car;
var wall;
var speed;
var weight;
var rect;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1000,200,60,height/2);
  wall.shapeColor=(0);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
}

function draw() {
  background(255,255,255);  
  
  car.velocityX=speed;

  if (car.x-wall.x< (car.width+wall.width)/2&&wall.x-car.x<(car.width/2+wall.width/2)){
    car.velocityX=0;
    var deformation=(0.5* weight* speed* speed)/22509;
    if (deformation<100)
    {
      car.shapeColor="green";
    }
    if (deformation<180 && deformation>100)
    {
      car.shapeColor="yellow";
    }
    if (deformation>180)
    {
      car.shapeColor="red";
    }
  }

  drawSprites();
}


