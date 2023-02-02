var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")

  cloudImage=loadImage("cloud.png");

  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  ground1=createSprite(200,190,400,10);
  ground1.visible=false;

  var rand=Math.round(random(1,5));
  console.log(rand);
  
}

function draw() {
  background(250);
  //console.log(trex.y);
  
  //console.log(frameCount);

  //hacer que el Trex salte al presionar la barra espaciadora
  if (keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
} 

  trex.collide(ground1);

  spawnClouds(); 
  spawnObstacles();
  drawSprites();
  }

  function spawnObstacles(){
    if (frameCount%60===0){
      var obstacle=createSprite(600,165,10,40);
      obstacle.velocityX=-6;
       var rand=Math.round(random(1,6))
       switch(rand){
        case 1:obstacle.addImage(obstacle1);
            break;
        case 2:obstacle.addImage(obstacle2);
            break;
        case 3:obstacle.addImage(obstacle3);
            break;
        case 4:obstacle.addImage(obstacle4);
            break;
        case 5:obstacle.addImage(obstacle5);
            break;
        case 6:obstacle.addImage(obstacle6);
            break;
        default:break;
       }
       obstacle.scale=0.1;
       obstacle.lifetime=300;
       console.log(obstacle.scale);
    }
  }

  function spawnClouds(){
    if (frameCount%60===0){
      cloud=createSprite(600,100,40,10);
      cloud.velocityX=-3;
      cloud.addImage(cloudImage);
      cloud.y=Math.round(random(15,60));
      cloud.scale=0.2;

      cloud.lifetime=215;

      //console.log(trex.depth);
      //console.log(cloud.depth);

      cloud.depth=trex.depth;
      trex.depth=trex.depth+1;
    }
    
  }