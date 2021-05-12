const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,500,1200,200);
  ground.shapeColor = "brown";
  box1 = new Box(600,900,30,30,0)
  
}

function draw() {
  background(255,255,255);  
  ground.display();
  box1.display();

}