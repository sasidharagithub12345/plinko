const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var plinko;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,30);
  plinko = new Plinko(400,400,10);

  
}

function draw() {
  background("black");  

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75, 10));
  }

  for (var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175,10));
  }
 
  for (var j = 40; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,275,10));
  }
 
  for (var j = 15; j <=width-30; j=j+50)
  {
    

    plinkos.push(new Plinko(j,375,10));
  }
 
  if(frameCount%15===0) {
   
    particles.push(new Particle(random(width/2-10, width/2+10), 20,10));
    
  }
  
  for (var j = 0; j < particles.length; j++) {
    
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
  
    divisions[k].display();
  }
  for (var k = 0; k < plinkos.length; k++) {
    
    plinkos[k].display();
  }
  
  Engine.update(engine);
  ground.display();
  plinko.display();


  drawSprites();
}