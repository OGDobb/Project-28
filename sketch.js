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

	stone = new Stone(400,550,50,50);

	slingshot = new SlingShot(stone.body,{x:400, y:550});

	ground = new Ground(500, 650, 1000, 30);

	boy = new Boy(400,590,100,200);
	//boy.addImage("boy", boyImg);
	//boy = boyImg;

	mango1 = new Mango(random(700, 890), random(350, 500), 50);
	mango2 = new Mango(random(700, 890), random(350, 500), 50);
	mango3 = new Mango(random(700, 890), random(350, 500), 50);
	mango4 = new Mango(random(700, 890), random(350, 500), 50);
	mango5 = new Mango(random(700, 890), random(350, 500), 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ffffff");
  
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);

  boy.display();
  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();

	mousePressed();
	mouseReleased();
	//mouseDragged();
}



// function mouseDragged(){
// 	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
// 	}
	
	function mouseReleased(){
	slingshot.fly();
	}

	function mousePressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stone.body,{x:235, y:420});
			slingshot.attach(stone.body);
		}
	}

	function detectCollision(lstone, lmango) {
		mangoBodyPosition=lmango.body.position;
		stoneBodyPosition=lstone.body.position;

		var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance<-lmango.r+lstone.r) {
			Matter.Body.setStatic(lmango.body,false);
		}
	}