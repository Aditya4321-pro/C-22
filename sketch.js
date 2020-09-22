const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,Ball,ground;
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
world=Engine.world
ground=Bodies.rectangle(200,380,50,50);
World.add(world,ground);
Ball=Bodies.circle(200,100,20,20)
World.add(world,Ball);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS);
  ellispe(Ball.position.x,Ball.position.y,20,20);
  
}