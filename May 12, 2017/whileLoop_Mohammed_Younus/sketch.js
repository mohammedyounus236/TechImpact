/*
Created by Dawn C. Hayes March 2017. 
Modified by Mohammed Younus
*/


function setup() {          //setup function
	createCanvas(600, 400);   //creates canvas 600 x 400
}                           //setup

function draw() {           //draw function
	background(14, 56, 105);  //background color

  var x = 0;                //creates variable x with the value 0
	var y = 0;                //creates variable y with the value 0

	
	while (y <= height || x <= width) {   //while loop to run to the height of y and x to the width
		stroke(0);                          //black outline
		fill(255);                          //white shape
		rect(x, y, 50, 50);                 //rectangle
		y = y + 50;                         //change location of the rectangle in y
		x += 50;                            //change location of the rectangle in x
	}                                     //while


	for (y = 0; y <= height; y += 50) {   //for loop to run from y = 0 til the height with an increment of 50
		stroke(255);                        //white outline
		fill(0);                            //black shape
		rect(300, y, 50, 50);               //rectangle
	}                                     //for loop

}//draw