
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;
var ground1;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	denisty:1.2,


}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(200,650,40);
	ground1=new Ground(width/2,670,width,20);

	dustbin=new Dustbin(1200,650)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  dustbin.display();
  drawSprites();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

	}
}