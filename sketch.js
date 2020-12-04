
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bob1,bob2,bob3,bob3,bob4,bob5,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(300,500,25); 
	bob2 = new Bob(350,500,25);
	bob3 = new Bob(400,500,25);
	bob4 = new Bob(450,500,25); 
	bob5 = new Bob(500,500,25); 
  
}

function draw() {
  background("green");
  Engine.update(engine);
  strokeWeight(4);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



