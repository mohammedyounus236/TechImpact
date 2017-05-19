/*  
Created by Dawn C. Hayes March, 2017
Modified by Mohammed Younus
*/


function setup() {        //setup function
	createCanvas(500, 500); //creates canvas 500 x 500
	background(0, 64, 135); //sets background color
}                         //setup

function draw() {         //draw function
	strokeWeight(4);        //thickness of stroke
	stroke(255);            //color of stroke

	for (var i = 0; i <= width; i += 50) { // for every i add 50. Spaces rectangles out. 
		for (var j = 0; j <= height; j += 50) { // for every j add 50. Spaces rectangles out.
			fill(mouseX, random(255), mouseY); // fill based on a random value and the mouse position
			ellipse(i, j, 40, 40) // draw at i, j for each rectangle's x and y position.
			fill(mouseY, random(255), mouseX); // fill based on a random value and the mouse position
			rect(j, i, 40, 40); // draw at i, j for each rectangle's x and y position.
			fill(random(255), mouseX, mouseY); // fill based on a random value and the mouse position
			ellipse(j, i, 40, 40) // draw at i, j for each rectangle's x and y position.
			fill (random(255), mouseY, mouseX); // fill based on a random value and the mouse position
			rect(i, j, 40, 40); // draw at i, j for each rectangle's x and y position.
			fill(mouseX, mouseY, random(255)); // fill based on a random value and the mouse position
			ellipse(i, j, 40, 40) // draw at i, j for each rectangle's x and y position.
			fill(mouseY, mouseX, random(255)); // fill based on a random value and the mouse position
			rect(j, i, 40, 40); // draw at i, j for each rectangle's x and y position.
		
		}//for
	}//for
}//draw