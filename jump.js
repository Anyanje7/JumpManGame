var spriteXpos=500;
var spriteYpos=350;
var speedX= 6;
var speedX2= 4;
var speedX3=8;
var spriteXpos3 = 80;
var spriteXpos2 = spriteXpos- 80;
var spritedist;
var sprite2YPos=300;
var sprite2XPos=0;
var myScore;
var failDist;
var life=3;
//var upspeed = 5;
var score=0;
function setup (){
  createCanvas(1000,600);
  bg = loadImage("Images/jumpwall.png");
  sprite1=loadImage("Images/brickSprite.png")
  sprite2 =loadImage("Images/jumperrh.png.png")
}
function draw(){
  clear();
  background(bg);

  image(sprite1,spriteXpos,spriteYpos,50,50);
  image(sprite2,sprite2XPos,sprite2YPos,50,100);

    if(keyIsDown(UP_ARROW) ){
      sprite2YPos -=100;
      if(sprite2YPos == 0){
        sprite2YPos +=100;
      }

    }

//}


  image(sprite1,spriteXpos,spriteYpos,50,50);
    image(sprite1,spriteXpos2,spriteYpos,50,50);
    image(sprite1,spriteXpos3,spriteYpos,50,50);

    spriteXpos3 =spriteXpos3 -speedX3;
   spriteXpos2 =spriteXpos2 -speedX;
   spriteXpos=spriteXpos -speedX2;
   if (spriteXpos <= 0){
     spriteXpos= 1000;
   }
   if (spriteXpos2 <= 0){
     spriteXpos2 = 1000;
   }
   if (spriteXpos3 <=0){
     spriteXpos3=1000;
   }
 spritedist= dist(spriteXpos,spriteYpos,spriteXpos2,spriteYpos);
   if (spritedist <= 200){
       spriteXpos = spriteXpos - 10;
       //spriteXpos3 = spriteXpos3 -10;
 }
if (frameCount % 3 == 0){
 if(sprite2YPos <=200){
      sprite2YPos +=100 ;
    }


  }

textSize(30);
fill(255,255,255);
text("score: " + score, 830,60);
text("lifes: " + life, 830,90);
  if (frameCount % 40 == 0){
    score++;
  }
  if (frameCount % 15 == 0){

    if(failDist<=100) {
      life=life-1;

  }
}
  failDist=dist (sprite2XPos,sprite2YPos,spriteXpos,spriteYpos);


  if(life<=0){
    life=life;
    clear();
    background(255,0,0);
    score=score;
  }
}
