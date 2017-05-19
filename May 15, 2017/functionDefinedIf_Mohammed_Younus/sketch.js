/*
Defining functions. Points are drawn across the canvas. Functions to move, bounce and display are 
created and called.
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus 
*/

// create an object, blip using object literal notation syntax.
var blip = {      //blip object created
	x: 300,         //x attribute of blip with value 300
	y: 200,         //y attribute of blip with value 200
	xspeed: 4,      //xspeed attribute of blip with value 4
	yspeed: -3,     //yspeed attribute of blip with value -3
}                 //blip

function setup() {        //setup function
	createCanvas(600, 400); //creates canvas with 600 x 400
	background(0);          //changes background color to zero
}                         //setup function

function draw() {         //draw function
	move(); // call the defined move() function.
	bounce(); // call the defined bounce() function.
	display(); // call the defined display() function.
}                         //draw function

// define a function using the keyword function. 
//bounce function
function bounce() {       //bounce

	if (blip.x > width || blip.x < 0) { // edge detection
		blip.xspeed = blip.xspeed * -1; // change direction
		background(random(255), random(255), random(255)); // random background colors based on the point's x position
	}//if

	if (blip.y > height || blip.y < 0) {//if statement to check where the blip is in terms of height
		blip.yspeed = blip.yspeed * -1;   //changes the location of the y
		background(random(255), random(255), random(255)); // random background colors based on the point's y position
	} //if statement

} //bounce

// move function()
function move() { //move function
	blip.x = blip.x + blip.xspeed;  //changes the x location of the blip
	blip.y = blip.y + blip.yspeed;  //changes the y location of the blip
} //move function

// display function()
function display() {        //display function
	strokeWeight(2);          //thickness of stroke
	stroke(255);              //color of the stroke
	point(blip.x, blip.y);    
}                           //display