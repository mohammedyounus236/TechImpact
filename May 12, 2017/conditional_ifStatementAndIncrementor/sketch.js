/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if statement) in the draw() loop.
Created by Dawn C. Hayes March 2017. 
*/

var circX = 200; //creates and sets circX to 200
var circY = 200; //creates and sets circY to 200
var circStroke = 125; //creates and sets circStroke to 125 
var circR = 55;       //creates and sets circR to 55
var circG = 135;      //creates and sets circG to 135
var circB = 225;      //creates and sets circB to 225
var circSize = 75;    //creates and sets circSize to 75
var recX = 100;       //creates and sets recX to 100
var recY = 300;       //creates and sets recX to 300
var recStroke = 35;   //creates and sets recStroke to 35
var recCol = 0;       //creates and sets recCol to black
var recSize = 75;     //creates and sets recSize to 75
var canvBG;           //creates canvBG
canvBG = 125, 55, 255;//sets canvBG to 125, 55, 255
var speed = 2;        //creates and sets speed to 2



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
	
	circX = circX + speed; // in the draw() loop, this statement will increment the value of circX by 3.
					   // this gives the appearance of animation that draws the ellipse at circX + 3 each time the code is completed. 
					   // it will then draw the ellipse at the new location after the code is executed. 
					   // this statement also introduces an incrementor, +, that takes a value, adds it to another and assigns it to the variable.
					   
    stroke(recStroke);  //selects the value for stroke with the defined recStroke from above
    fill(recCol);       //fills in with the value of recCol from above
    rect(recX, recY, recSize, recSize); //creates rectangle with the X, Y coordinates defined by recX, and recY and the width and height of recSize defined from above
  
    recY = recY - speed; // use a - incrementor to make the rectangle appear to move up on the canvas.
    
    if(circX > width || circX < 0) { // an if statement is used to introduce a path based upon whether a condition is true or not. 
    								 // if the condition is true, the block of code in between the curly braces is executed. 
    								 // if not, P5 will go on to the rest of the code.
    	speed = speed *-1;			// take the speed and multiply itself by -1. This achieves a "reverse movement" effect.
    								// relational operators such as  > and || add more options to consider in testing for a condition being true.
    } 					// in this case, the y position is only reversed if it is less than 0. 
}