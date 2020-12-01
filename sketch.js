function setup() {
  // put setup code here
  createCanvas(1900,950);

}

function draw() {
  // put drawing code here
    background(0, 182, 250);
    fill(255, 144, 0);
    ellipse(mouseX, mouseY, 300,300);
    fill(136, 255, 0);
   // ellipse(mouseX, mouseY, 250,250);
    ellipse(mouseX-70, mouseY-60, 60, 60);
    fill(255, 0, 0);
    ellipse(mouseX-70, mouseY-60, 30, 30);
    fill(136, 255, 0);
    ellipse(mouseX+70, mouseY-60, 60, 60);
    fill(255, 0, 0);
    ellipse(mouseX+70, mouseY-60, 30, 30);
    ellipse(mouseX, mouseY-20, 30, 30);
    fill(255, 0, 102);
    ellipse(mouseX, mouseY+70, 100, 100);
    fill(255,0,0); 
    //arc(mouseX,mouseY,50,100,0,180);
}