const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

function preload(){
  bgimg=loadImage("imagesok/bg.png")
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world;
  ground= new Ground(600,395,1200,20)
 platform= new Ground(150,305,300,170)

  box1= new Box(700,320,70,70)
  box2= new Box(920,320,70,70)
//PI = 180
  pig1 = new Pig(810,350,50,50)
  log1 = new Log(810,260,300,20,PI)
  box3= new Box(700,240,70,70)
  box4= new Box(920,240,70,70)
//PI = 180
  pig2 = new Pig(810,220,50,50)
  log2 = new Log(810,180,300,20,PI)

  box5= new Box(810,160,70,70)

  log3 = new Log(760,150,150,20,-PI/4)
  log4 = new Log(870,150,150,20,PI/4)
bird = new Bird(100,100,50,50)
 pig = new Pig(100,169,69,69)
 slingshot= new Slingshot(bird.body,pig.body)
}

function draw() {
  background(bgimg); 
  Engine.update(engine)
 
  box1.display()
  box2.display()
  ground.display()
  pig1.display()
  log1.display()
  box3.display()
  box4.display()
 
  pig2.display()
  log2.display()
box5.display()
log3.display()
log4.display()
 bird.display()
 platform.display()
 pig.display()
 slingshot.display()
}
