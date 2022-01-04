const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

        //cajas
    box1 = new Box(700,240,70,70);
    box2 = new Box(920,240,70,70);
    box3 = new Box(700,180,70,70);
    box4 = new Box(920,180,70,70);
    box5= new Box(800,100,70,70);
        //suelo
    ground = new Ground(600,height,1200,20);
        //cerdos
    pig1 = new pig(810,220);
    pig2 = new pig(810,180);
        //tablones
    log1 = new log(810, 200, 300, PI/2);
    log2 = new log(810, 100, 300, PI/2);
    log3 = new log(810, 90, 160, -PI/7);
    log4 = new log(790, 90, 160, PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}