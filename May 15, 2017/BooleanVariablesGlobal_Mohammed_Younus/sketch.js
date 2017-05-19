/*
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
*/

var on = false;               //creates variable on set to false

function setup() {            //setup function  
  createCanvas(600, 400);     //creates canvase 600 x 400
}                             //setup function

function draw() {             //draw function
  if (on) {                   //if statement based on "on"
    background(0, 255, 0);    //changes background to green
  } else {                    //else
    background(0);            //background is black
  }                           //else
  
  stroke(255);                //a white stroke
  strokeWeight(4);            //thickness of stroke
  noFill();                   //no color inside the shape
  
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { //if mouse is within certain coordinates
    fill(255, 0, 200);                                                //change the color of the shape
    }                                                                 //if
    rectMode(CENTER);                                                 
  rect(300, 200, 100, 100);                                           //creates rectangle
}                                                                     //if statement

function mousePressed() {                                               //defining the function mousePressed
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {   //if the mouse is within these coordinates
    // if (on) {
    //   on = false;
    // } else {
    //   on = true;
    // }
    on = !on;                                                           //negate the value of on
    
  }                                                                     //if
}                                                                       //mousePressed