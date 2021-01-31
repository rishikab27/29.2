
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2;
var box1, box2, box3, box4; 

function preload()
{
	
}

function setup() {
    createCanvas(1200,500);
    

    ground1 = new Ground(600,400,100,10);


    


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
	
}
function draw(){

    ground1.display();
}










