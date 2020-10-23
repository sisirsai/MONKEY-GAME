var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(555,470);
  
 ground=createSprite(312,400,628,20);
  ground.velocityX=-4;
  ground.x = ground.width /2;
 
 
  monkey=createSprite(80,370,20,40);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  background("skyblue");
   console.log(frameCount);
  monkey.collide(ground);
  if (ground.x < 311){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
     
    }
  monkey.velocityY =monkey.velocityY + 0.8
drawSprites();
 
  fruits();
   obstacles();
  
  
  
  stroke("white");
  textSize(20);
  fill("black");
  textStyle(BOLD); 
  strokeWeight(5);
  text("BANANAS ATE :  "+score,50,50);
  
  
  stroke("white");
  textSize(20);
  fill("black");
  textStyle(BOLD); 
  strokeWeight(5);
  survivalTime=Math.ceil(Math.round(frameCount)/Math.round(frameRate()))
  text("SURVIVAL TIME :  "+survivalTime,320,50);
  
  
  
  
  

}


function fruits(){
  if(frameCount%80===0){
    banana=createSprite(500,100,20,20);
    banana.y=Math.round(random(220,300));
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.lifeTime=125;
    banana.scale = 0.1;
    FoodGroup.add(banana);
  }
}
  function obstacles(){
    if (frameCount % 300 === 0) {
    obstacle = createSprite(500,363, 10, 10);
    obstacle.addImage("obstacle", obstaceImage);
    obstacle.velocityX = -10
    obstacle.scale = 0.15;
    obstacle.lifetime=120;
  
    obstacleGroup.add(obstacle);
  }
    
    
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  




