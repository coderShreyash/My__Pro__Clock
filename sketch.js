function setup() {
 
  createCanvas(700,450);
  hr = hour();
  min = minute();
  sec = second();
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  textSize(20);
  stroke(255)
  strokeWeight(1.5)
  fill("white");
  if(hr<13){
    text("Hour: "+hr+" AM"+"   Minutes: "+min+"   Seconds: "+sec,180,420)
    }
    else if(hr>=13){
      text("Hour: 0"+hr%12+" PM"+"   Minutes: "+min+"   Seconds: "+sec,180,420)
    }
  translate(350,210)
  rotate (-90);
  hr = hour();
  min = minute();
  sec = second();
  scAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  
 

  
    
    fill(0)
    strokeWeight(8)
    stroke(rgb(147, 0, 252))
    arc(0,0,260,260,0, scAngle);
    fill(0,0,0,0)
    strokeWeight(8)
    stroke(rgb(100, 0, 255))
    arc(0,0, 220, 220,0,minAngle);
    stroke(rgb(10, 0, 255))
    arc(0,0,180,180,0,hrAngle);
    strokeWeight(2)
    stroke(255);
    strokeWeight(8)
    arc(0,0,280,280,0,360);
    push();
    stroke(rgb(147, 0, 252))
    rotate(scAngle)
    line(0,0,110,0);
    pop();
    push();
    stroke(rgb(100, 0, 255))
    rotate(minAngle)
    line(0,0,90,0);
    pop();
    push();
    stroke(rgb(10, 0, 255))
    rotate(hrAngle)
    line(0,0,70,0);
    
    pop();
    strokeWeight(9)
    point(0,0);
  
fill("black")
push();

text("12",150,0)
pop();
push();
rotate(30)
text("01",150,0)
pop();
push();
rotate(60)
text("02",150,0)
pop();
push();
rotate(90)
text("03",150,0)
pop();
push();
rotate(120)
text("04",150,0)
pop();
push();
rotate(150)
text("05",150,0)
pop();
push();
rotate(180)
text("06",150,0)
pop();
push();
rotate(210)
text("07",150,0)
pop();
push();
rotate(240)
text("08",150,0)
pop();
push();
rotate(270)
text("09",150,0)
pop();
push();
rotate(300)
text("10",150,0)
pop();
push();
rotate(330)
text("11",150,0)
pop();






}