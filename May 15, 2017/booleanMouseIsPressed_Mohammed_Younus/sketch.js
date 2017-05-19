/*
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed YOunus
*/

function setup() {        //setup function
  createCanvas(600, 400); //creates canvas 600 by 400
}

function draw() {         //draw function
  background(0);          //sets the background to black
  stroke(255);            //sets the color of the stroke
  strokeWeight(4);        //sets the thickness of the stroke
  noFill();               //doesn't fill in the shape or object with any color
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) { //if mouse is within the coordinates displayed
    if (mouseIsPressed) {                                             //if the mouse is pressed
      background(0, 255, 0);                                          //changes the background color to green if mouse is pressed
    }                                                                 //if statement
    fill(255, 0, 200);                                                //fills in the rectangle if mouse is in the appropriate location
  }                                                                   //if statement
    rect(300, 200, 100, 100);                                         //rectangle created 100 x 100 at location 300 x 200
}                                                                     //draw function