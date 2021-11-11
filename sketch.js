const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow
var snow1
var snow2
var snow3
var snow4
var snow5
var snow6
var snow7
var snow8
var snow9
var snow10

function preload(){
  snow=loadImage("snow2.jpg")
}
function setup() {
  
  createCanvas(1300,600);
  engine = Engine.create();
    world = engine.world;
  snow1=new Snow(600,300,30,40);
  snow2=new Snow(800,100,30,40);
  snow3=new Snow(700,50,30,40);
  snow4=new Snow(500,30,30,40);
  snow5=new Snow(100,100,30,40);
  snow6=new Snow(900,80,30,40);
  snow7=new Snow(200,200,30,40);
  snow8=new Snow(300,350,30,40);
  snow9=new Snow(400,40,30,40);
  snow10=new Snow(1000,500,30,40);
}

function draw() {
  background(snow);
  Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  drawSprites();
}