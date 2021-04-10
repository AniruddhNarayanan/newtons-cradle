
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter=100
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(350,100,600,10);
	bobObject1 = new bob(140,200,50);
	bobObject2 = new bob(165,200,50);
	bobObject3 = new bob(190,200,50);
	bobObject4 = new bob(215,200,50);
	bobObject5 = new bob(240,200,50);
	rope1 = new rope(bobObject1.body, roofObject.body,0,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body, roofObject.body,-bobDiameter*1,0);
	rope3 = new rope(bobObject3.body, roofObject.body,0,0);
	rope4 = new rope(bobObject4.body, roofObject.body,+bobDiameter*1,0);
	rope5 = new rope(bobObject5.body, roofObject.body,+bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw(){
//   rectMode(CENTER);
  background("white");
   

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
}

function key_pressed(){
	if(KEY_PRESSED==="up_arrow"){
		Matter.Body.ApplyForce(bobObject1.body,bobObject1.position,{x:5,y:5})
	}
}



