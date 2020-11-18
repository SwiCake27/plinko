const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground
var div=[];
var plink=[];
var ball=[];
var divHeight=300
function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400, 600, 800, 10);
  for(var k=0;k<=width;k=k+80){
    div.push(new Divisions(k,height-divHeight/2,10,divHeight))
  }

    for(var j=40;j<=width-10;j=j+50){
      plink.push(new Plinko(j,75))
    
  }
  for(var j=15;j<=width-10;j=j+50){
    plink.push(new Plinko(j,175))
  
}
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  for(var k=0;k<div.length;k++){
    div[k].display();
  }
  for(var j=0;j<plink.length;j++){
    plink[j].display();
  }
  if(frameCount%60===0){
    ball.push(new Particle(random(width/2-30,width/2+30),10,10))
    
  }
  for(var i=0;i<ball.length;i++){
    ball[i].display();
  }
}