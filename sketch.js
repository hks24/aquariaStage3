var mermaid1,mermaid2;
var spaceCraft;
var Aquaria;

function preload(){
mermaidImg1 = loadImage("img1.png");
mermaidImg2 = loadImage("img2.png")
gun1Img = loadImage("gun1.png");
gun2Img = loadImage("gun2.png");
gun3Img = loadImage("gun3.png");
gun4Img = loadImage("gun4.png");
backgroundImg = loadImage("universeImg3.jpg");
aquariaImg = loadImage("planet.png");
gunImg1 = loadImage("swordImg.png");
gunImg2 = loadImage("tridentImg.png");
gunImg3 = loadImage("sword2.png");
gunImg4 = loadImage("magicBall.png");
spaceshipImg = loadImage("spaceShip7.png");
spaceshipImg2 = loadImage("spaceship5.png");
spaceshipImg3 = loadImage("spaceship4.png");
spaceshipImg4 = loadImage("spaceship6.png");


}

function setup(){
createCanvas(1200,800);

Aquaria = createSprite(600,400,200,200);
Aquaria.addImage(aquariaImg);
mermaid1 = createSprite(600,350,50,50);
mermaid1.addImage(mermaidImg1);
mermaid1.scale = 0.5;
mermaid1.shapeColor = "red";

mermaid2 = createSprite(600,450,50,50);
mermaid2.addImage(mermaidImg2);
mermaid2.scale = 0.5;
mermaid2.shapeColor = "red";

gun1 = createSprite(100,120,20,20);
gun1.addImage(gunImg1);
gun1.scale = 0.8

gun2 = createSprite(160,120,20,20);
gun2.addImage(gunImg2);
gun2.scale = 0.8;

gun3 = createSprite(220,120,20,20);
gun3.addImage(gunImg3);


gun4 = createSprite(260,120,20,20);
gun4.addImage(gunImg4);
gun4.scale = 0.5

}

function draw(){
background(backgroundImg);

if(keyDown(RIGHT_ARROW)){
  mermaid1.x = 650;
  mermaid1.y = 400;
  mermaid2.x = 550;
  mermaid2.y = 400;
}

if(keyDown(UP_ARROW)){
  mermaid1.x = 600;
  mermaid1.y = 350;
  mermaid2.x = 600;
  mermaid2.y = 450;
}

spawnSpaceCrafts();

drawSprites();
}

function spawnSpaceCrafts(){
  if(frameCount%100===0){
    spaceCraft = createSprite(100,100,100,100);

    var position = Math.round(random(1,4));
    if(position === 1){
      spaceCraft.x = 600;
      spaceCraft.y = 0;
      spaceCraft.velocityY = 5;
    
    }
    if(position ===2){
      spaceCraft.x = 600;
      spaceCraft.y = 800;
      spaceCraft.velocityY = -5;
      spaceCraft.addImage(spaceshipImg3);
      spaceCraft.scale = 0.5

    }
    if(position === 3){
      spaceCraft.x = 0;
      spaceCraft.y = 400;
      spaceCraft.velocityX = 5;
      spaceCraft.addImage(spaceshipImg);

    }
    if(position === 4){
      spaceCraft.x = 1200;
      spaceCraft.y = 400;
      spaceCraft.velocityX = -5;
      spaceCraft.addImage(spaceshipImg2);
      spaceCraft.scale = 0.7;
    }
  }
}
