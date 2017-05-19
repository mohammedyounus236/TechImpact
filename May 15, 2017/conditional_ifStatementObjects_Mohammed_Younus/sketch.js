/* 
Code by Dawn C. Hayes March, 2017.
Modified by Mohammed Younus
Modify old project to have a function
*/

var circle = {  //circle object
  x: 200,       //x attribute with the value 200
  y: 200,       //y attribute with the value 200
  strok: 125,   //strok attribute with the value 125
  r: 55,        //r attribute with the value 55
  g: 135,       //g attribute with the value 135
  b: 225,       //b attribute with the value 225
  size: 75      //size attribute with the value 75
}               //circle

var rectangle = { //rectangle object
  x: 100,         //x attribute with the value 100
  y: 300,         //y attribute with the value 300
  strok: 35,      //strok attribute with the value 35
  col: 0,         //col attribute with the value 0
  size: 75        //size attribute with the value 75
}                 //rectangle

var canvBG;             //canvBG declared
canvBG = 125, 55, 255;  //canvBG set
var speed = 2;          //speed set

function setup() {        //setup function
	createCanvas(400, 400); //canvas created 400 x 400
}                         //setup function


function draw() {           //draw function
	background(canvBG);       //changes background color
	stroke(circle.strok);     //changes stroke color of the circle
	fill(circle.r, circle.g, circle.b);  //changes color of circle
	stroke(circle.strok);                 //changes stroke color of circle
	ellipse(circle.x, circle.y, circle.size, circle.size); //creates circle from object
	ellipse(circle.x + 50, circle.y - 75, circle.size, circle.size); // by adding +  50 and -75, the position of the ellipse is offset against the other.
	fill(circle.r, circle.g, circle.b, 135); //colors circle from object
	
	circle.x = circle.x + speed; // in the draw() loop, this statement will increment the value of circX by 3.
					   // this gives the appearance of animation that draws the ellipse at circX + 3 each time the code is completed. 
					   // it will then draw the ellipse at the new location after the code is executed. 
					   // this statement also introduces an incrementor, +, that takes a value, adds it to another and assigns it to the variable.
					   
    stroke(rectangle.strok);  //changes strok color of rectangle
    fill(rectangle.col);      //change color of rectangle
    rect(rectangle.x, rectangle.y, rectangle.size, rectangle.size); //creates rectangle from object
    
    rectangle.y = rectangle.y - speed; // use a - incrementor to make the rectangle appear to move up on the canvas.
    
    if(circle.x > width || circle.x < 0) { // an if statement is used to introduce a path based upon whether a condition is true or not. 
    								 // if the condition is true, the block of code in between the curly braces is executed. 
    								 // if not, P5 will go on to the rest of the code.
    	speed = speed *-1;			// take the speed and multiply itself by -1. This achieves a "reverse movement" effect.
    								// relational operators such as  > and || add more options to consider in testing for a condition being true.
    } 					// in this case, the y position is only reversed if it is less than 0. 
}