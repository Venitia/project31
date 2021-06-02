const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;

var drops = []
var maxDrops = 100;
var umbrella1;
function setup(){
var canvas = createCanvas(400,700);
  engine= Engine.create();
  world = engine.world;
 
  
  umbrella1 = new Umbrella(200,500);
  
  if(frameCount%150 === 0){
    for(var i = 0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)))
    }
  }
}

function draw(){
  background("black"); 
  
  Engine.run(engine);
 
  umbrella1.display();
  for(var i = 0 ; i < maxDrops; i++){
    drops[i].display();
    drops[i].updateY();
  }
}   

