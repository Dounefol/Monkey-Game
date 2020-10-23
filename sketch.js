
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;

function preload(){  
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
 monkey = createSprite(50,140,20,50);
 monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 monkey.scale = 0.1;
  
 ground = createSprite(200,380,1000,20);
 ground.velocityX = -4;
 ground.shapeColor="brown"
 ground.x = ground.width /2;
  
}


function draw() {

background("white");
var survivalTime=0;

stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500,50);

stroke("black");
textSize(20);
fill("black");

survivalTime=Math.ceil(frameCount/frameRate()); 
text("Survival Time: "+ survivalTime, 200,50);
  
if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  

  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
   }
  monkey.collide(ground);
  bananaGroup();
  obstacleGroup();
  drawSprites();
}

function  obstacleGroup(){
  if(frameCount%200==0){
  obstacle=createSprite(400,350,40,10);
  obstacle.scale=0.1
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-2
  obstacle.depth=monkey.depth-1
  }
}

function bananaGroup(){
  if(frameCount%80==0){
  banana = createSprite(400,180,20,50);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX=-2
  banana.y=Math.round(random(120,200));
  banana.depth=monkey.depth-1
  }

}




