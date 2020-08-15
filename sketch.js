const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1, box2, box3, box4, box5, log1, log2, log3, log4;
var pig, pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,height,1200,20);
    pig = new Pig(800, 300);
    log1 = new Log(800, 275, 275, PI/2);
    box3 = new Box(700,250,70,70);
    box4 = new Box(900,250,70,70);
    pig2 = new Pig(800, 250);
    log2 = new Log(800, 150, 275, PI/2);
    box5 = new Box(800,125,70,70);
    log3 = new Log(750, 125, 150, PI/7);
    log4 = new Log(850, 125, 150, -PI/7);
    bird = new Bird(20, 50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}