
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	 box1 = new Dustbin (700,height-35,150,20)
	 
	 paper = new Paper (200,100,20)
	 ground = new Ground (400,height-20,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  box1.display();
  
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-250})
	}
}



