/*
Uses while() and for loop() to draw rectangles to the canvas on the y axis.
Created by Dawn C. Hayes March 2017. 
*/


function setup() {          //setup function
	createCanvas(600, 400);   //creates canvas 600 x 400
}                           //setup

function draw() {           //draw function
	background(14, 56, 105);  //background color

	var y = 0;                //creates variable y with the value 0
	while (y <= height) {     //while loop to run til the height
		stroke(0);              //black outline
		fill(255);              //white shape
		rect(200, y, 50, 50);   //rectangle
		y = y + 50;             //change y location of the rectangle
	}

	for (y = 0; y <= height; y += 50) {   //for loop to run from y = 0 til the height with an increment of 50
		stroke(255);                        //white outline
		fill(0);                            //black shape
		rect(300, y, 50, 50);               //rectangle
	}                                     //for loop

}//draw