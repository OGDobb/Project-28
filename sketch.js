const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg, mangoImg, stoneImg, treeImg;
var boy, mango1, mango2, mango3, mango4, mango5, tree, stone;
var slingshot, ground;

function preload()
{
boyImg = loadImage("sprites/boy.png");
treeImg = loadImage("sprites/tree.png");
stoneImg = loadImage("sprites/stone.png");
mangoImg = loadImage("sprites/mango.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(800, 500, 200, 300);

	stone = new Stone(400,500,50,50);

	slingshot = new SlingShot(stone.body,{x:400, y:550});

	ground = new Ground(500, 650, 1000, 30);

	boy = new Boy(400,590,100,200);
	boy.addImage("boy", boyImg);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ffffff");
  
detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);

  tree.display();
  stone.display();
  ground.display();
  boy.display();

  drawSprites();
 
}



function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
	slingshot.fly();
	}

	function mousePressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stoneObj.body,(x:235, y:420));
			launcherObject.attach(stoneObj.body);
		}
	}