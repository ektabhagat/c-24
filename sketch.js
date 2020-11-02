const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wd;


function setup(){
    createCanvas(1200,400);
    en = Engine.create(); //en.world
    wd = en.world;
    box1=new Box(700,320,70,70)
     box2=new Box(920,320,70,70)
ground1=new ground(600,380,1200,20)
pig1=new pig(810,350)
log1=new log(810,260,300,PI/2)  
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
pig3 = new pig(810, 220);

log3 =  new log(810,180,300, PI/2);

box5 = new Box(810,160,70,70);
log4 = new log(760,120,150,PI/7);
log5 = new log(870,120,150,-PI/7);
bird1=new bird(100,100)



   
    

}

function draw(){
    background(0);
    Engine.update(en);
    
box1.display()
box2.display()
ground1.display()
pig1.display()
log1.display()
box3.display()
box4.display()
     pig3.display()
     log3.display()
     box5.display()
log4.display()
log5.display()
bird1.display()


}
          




















































































