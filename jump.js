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
function setup (){
  createCanvas(1000,600);
  bg = loadImage("Images/jumpwall.png");
  sprite1=loadImage("Images/brickSprite.png")
  sprite2 =loadImage("Images/jumperrh.png.png")
}
function draw(){
  background(bg);
  image(sprite1,spriteXpos,spriteYpos,50,100);
  image(sprite2,sprite2XPos,sprite2YPos,50,150);
    if(keyIsDown(UP_ARROW)){
      sprite2YPos -=5;
      if(sprite2YPos==150){
        sprite2YPos=300;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      sprite2XPos +=5;
}
if(keyIsDown(LEFT_ARROW)){
  sprite2XPos -=5;
}
if(keyIsDown(DOWN_ARROW)){
  sprite2YPos +=5;
}
  image(sprite1,spriteXpos,spriteYpos,50,100);
    image(sprite1,spriteXpos2,spriteYpos,50,100);
    image(sprite1,spriteXpos3,spriteYpos,50,100);

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

}
