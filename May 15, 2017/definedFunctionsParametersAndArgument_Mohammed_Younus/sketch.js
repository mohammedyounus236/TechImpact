/*
Demonstrates definition and use of a function with parameters and arguments. 
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
*/

function setup() {          //setup function
	createCanvas(600, 400);   //creates canvas 600 x 400
}                           //setup function

function draw() {           //draw function
	background(0);            //changes background to black
	moon(445, 200, 150); // the moon shape is drawn at the arguments given.

	star(370, 25);  // everytime the function is called, the code is executed with the given arguments based on the definition.
	star(50, 175);  // star function with x location 50, y location 175
	star(115, 35);  // star function with x location 115, y location 35
	star(25, 44);   // star function with x location 25, y location 44
	star(100, 17);  // star function with x location 100, y location 17
	star(215, 235); // star function with x location 215, y location 235
	star(418, 293); // star function with x location 418, y location 293
	star(525, 370); // star function with x location 525, y location 370
	star(175, 350); // star function with x location 175, y location 350
	star(235, 115); // star function with x location 235, y location 115
	star(444, 325); // star function with x location 444, y location 325
	star(317, 200); // star function with x location 317, y location 200
	star(535, 315); // star function with x location 535, y location 315
	star(293, 218); // star function with x location 293, y location 218
}                 //draw function

// a function is defined with the keyword function. 
// any name can be used as long as it is not a reserved/system word.
// it takes values or variables called parameters
// functions should be defined outside of the setup() and draw() loops.
function moon(xloc, yloc, diam) {   //moon function with the parameters xloc, yloc, and diam
	noStroke();                       //no stroke
	fill(255, 255, 153);              //fills in the color of the moon
	ellipse(xloc, yloc, diam);        //parameters are passed into ellipse. 
}                                   //moon

function star(xloc, yloc) {     //star created with xloc and yloc parameters
	fill(255);                    //fills in the color of the star
	ellipse(xloc, yloc, 5);       //creates ellipse with the parameters given from the function
}                               //star