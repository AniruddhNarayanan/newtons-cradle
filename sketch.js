
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(200,200,400,10);
	bobObject1 = new bob(140,300,20);
	bobObject2 = new bob(165,300,20);
	bobObject3 = new bob(190,300,20);
	bobObject4 = new bob(215,300,20);
	bobObject5 = new bob(240,300,20);
	rope1 = new rope(bobObject1.body, roofObject.body,bobDiameter*2,0);
	rope2 = new rope(bobObject2.body, roofObject.body,bobDiameter*2,0);
	rope3 = new rope(bobObject3.body, roofObject.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
   

  bobObject1.display();	
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();

}

function key_pressed(){
	if(KEY_PRESSED==="up_arrow"){
		Matter.Body.ApplyForce(bobObject1.body,bobObject1.position,{x:5,y:5})
	}
}



