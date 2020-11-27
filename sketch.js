const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,25);

    //for(var d = 40; j <= width; j = j + 50) {
    //plinkos.push(new Plinko(j,75,10));
  //}
  for(var b = 15; b <= width-10; b = b + 50) {
    plinkos.push(new Plinko(b,75,10));
  }
  //for(var c = 40; c <= width; c = c + 50) {
    //plinkos.push(new Plinko(c,175,10));
  //}
  for(var a = 15; a <= width-10; a = a + 50) {
    plinkos.push(new Plinko(a,175,10));
  }
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  for(var k = 0; k <= width; k = k + 80)  {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  if(frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10),10,10));
  }
  for(var e = 0; e < particles.length; e++) {
    particles[e].display();
  }
  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for(var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }
  
  ground.display();
}