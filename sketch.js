var gameState="play";

var tower,towerImage;
var door,doorGroups,doorImage;
var climber,climberGroups,climberImage;
var invisibleGround,invisibleGroups
var ghost,ghostImage;
var spookySound;
function preload(){
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png");
spookySound=loadSound("spooky.wav");




}
function setup(){
createCanvas(600,600);
spookySound.loop     

tower=createSprite(300,300);
tower.addImage("tower",towerImage);
tower.velocityY=2;
ghost=createSprite(200,200)
ghost.addImage("standing",ghostImage)
ghost.scale=0.3;

doorGroups=new Group();
climberGroups=new Group();
invisibleGroups=new Group();





}
function draw(){
background(0);

if(gameState==="play"){
if(tower.y>500){
tower.y=300;

}
spawndoors();

if(keyDown("left")){
ghost.x=ghost.x-3;

}
if(keyDown("right")){
ghost.x=ghost.x+3;

}
if(keyDown("space")){
ghost.velocityY=-5;

}
ghost.velocityY=ghost.velocityY+0.8;

if(climberGroups.isTouching(ghost)){
ghost.velocityY=0;

}
if(invisibleGroups.isTouching(ghost)||ghost.y>600){
ghost.destroy();

gameState="end";

}
drawSprites();



}
if(gameState==="end"){
fill("yellow")
textSize(30);
text("gameover",230,250);


}


}


function spawndoors(){
if(frameCount%240===0){
door=createSprite(200,-50)
door.addImage("door",doorImage);
climber=createSprite(200,10)
climber.addImage("climber",climberImage);
door.velocityY=1;
door.lifetime=700;

climber.velocityY=1;
climber.lifetime=700;


door.x=Math.round(random(120,400))
climber.x=door.x;

doorGroups.add(door);
climberGroups.add(climber);

ghost.depth = door.depth;
    ghost.depth +=1;

invisibleGround=createSprite(200,15);
invisibleGround.width=climber.width;
invisibleGround.height=2;
invisibleGround.x=door.x;
invisibleGround.velocityY=1;
invisibleGround.debug=true;
invisibleGroups.add(invisibleGround);
}








}

