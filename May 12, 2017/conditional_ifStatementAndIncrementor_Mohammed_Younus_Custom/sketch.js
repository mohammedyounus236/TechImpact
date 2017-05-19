/*
Created by Dawn C. Hayes March 2017. 
Modified by Mohammed Younus
*/

var circX = 200; //creates and sets circX to 200
var circY = 200; //creates and sets circY to 200
var circStroke = 125; //creates and sets circStroke to 125
var circR = 0; //creates and sets circR to 55
var circG = 0; //creates and sets circG to 135
var circB = 255; //creates and sets circB to 225
var circSize = 75; //creates and sets circSize to 75
var recX = 100; //creates and sets recX to 100
var recY = 230; //creates and sets recY to 300
var recStroke = 35; //creates and sets recStroke to 35
var recCol = ('red'); //creates and sets recCol to red
var recSize = 75; //creates and sets recSize to 75
var canvBG; //creates canvBG
canvBG = 125, 155, 255; //sets canvBG to 125, 155, 255
var speed = 4; //creates and sets speed to 2

function setup() {  //setup function
  createCanvas(400, 400); //creates canvas with the size defined in the parameter
}//setup function

function draw() { //draw function
  background(canvBG); //sets the background to the predefined canvBG variable
	stroke(circStroke); //sets the value of stroke to circStroke defined above
	fill(circR, circG, circB); //fills in the color of the ellipse to the defined red, green and blue colors
	stroke(circStroke); //sets the value of stroke to circStroke defined above
	ellipse(circX, circY, circSize, circSize); //creates circle with the location of circx, circy and the size of circSize
	ellipse(circX + 50, circY - 75, circSize, circSize); // by adding +  50 and -75, the position of the ellipse is offset against the other.
	fill(circR, circG, circB, 135); //fills in the ellipse with the defined colors in the parameters

  circX = circX + speed; //the circle moves in the x direction by an additional speed of the defined value from above
  
    stroke(recStroke);  //selects the value for stroke with the defined recStroke from above
    fill(recCol);       //fills in with the value of recCol from above
    rect(recX, recY, recSize, recSize); //creates rectangle with the X, Y coordinates defined by recX, and recY and the width and height of recSize defined from above
  
  recY = recY - speed //changes the location of the Y position of the rectangle and animates a movement of the rectangle in the y direction
  
  if((circX > width || circX < 0) || (recY > height || recY < 0 )){ //checks the condition to see if the circX is greater than the width or less than 0 as well as check to see if recY is greater than the height or less than 0
    speed = speed * -1; //if the above condition is met, then the value of the speed becomes a negative of whatever value it previous represented12
  }//if statement
  
}//draw function