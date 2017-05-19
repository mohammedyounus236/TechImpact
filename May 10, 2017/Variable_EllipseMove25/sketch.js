/*
Done by: Mohammed Younus
*/

var circX; //declares the variable circX
circX = 200; //sets the value of circX to 200 
var circY;  //declares the variable circy
circY = 200; //sets the value of circY to 200 
var circStroke = 125; //creates variable circStroke with the value 125
var circR = 55;       //creates variable circR with the value 55
var circG = 135;      //creates variable circG with the value 135
var circB = 225;      //creates variable circB with the value 225
var circSize = 75;    //creates variable circSize with the value 75
canvBG = 125, 55, 255;//sets value of canvBG to 125, 55, 255

function setup() {        //setup function thats built-in
  createCanvas(400, 400); //creates canvas with the set values in the parameters
}                         //closing of setup

function draw() {         //built-in draw function
  background(canvBG);     //changes the background to the variable of canvBG
    stroke(circStroke);   //sets the stroke value to the defined circStroke value
    fill(circR, circG, circB);  //fills in the shape with the values defined by circR, circG, and circB
    stroke(circStroke);         
    ellipse(circX, circY, circSize, circSize); //creates an eclipse with the defined x and y values from the the variable and the size of the value from above
    ellipse(circX + 50, circY - 75, circSize, circSize); //creates the same size eclipse but in a different location
    fill(circR, circG, circB, 135); //fills in the ellipse
     
    circX = circX + .25;  //changes the value of circX, so now the shapes that have this value as the x coordinate will move by .25 to the right
    circY += .25;         //changes the value of circY, so now the shapes that use this value are now moving down by .25 at a time
}