
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bobDiameter = 40;
	roofObject = new Roof(360,160,500,20)
	bobObject1 = new bob(200,450,40);
	bobObject2 = new bob(280,450,40);
	bobObject3 = new bob(360,450,40);
	bobObject4 = new bob(440,450,40);
	bobObject5 = new bob(520,450,40);
	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope1.shapeColor = color("white");
	rope2 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2.shapeColor = color("white");
	rope3 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope3.shapeColor = color("white");
	rope4 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope4.shapeColor = color("white");
	rope5 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope5.shapeColor = color("white");
  

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



