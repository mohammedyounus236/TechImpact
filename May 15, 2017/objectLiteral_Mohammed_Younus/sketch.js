/* 
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
*/

// the code below creates a circle using object literal notation. Everything inside the brackets is local in scope
// and is accessed with dot syntax. 
var circle = {          //creates circle object
	x: 200,               //sets x value of circle object ot be 200
	y: 200,               //sets y value of circle object ot be 200
	diam: 50,             //sets diam value of circle object ot be 50
	r: 255,               //sets r value of circle object ot be 255
	g: 123,               //sets g value of circle object ot be 123
	b: 25                 //sets b value of circle object ot be 25
}                       //circle object

function setup() {        //setup function
	createCanvas(400, 400); //creatse canvas 400 x 400
}                         //setup function


function draw() {                                             //draw function
	background(34, 123, 218);                                   //changes background
	noStroke();                                                 //has no stroke
	fill(circle.r, circle.g, circle.b);                         //sets the color of the ellipse from the circle object
	ellipse(circle.x, circle.y, circle.diam, circle.diam);      //sets the size and location of the ellipse from the circle object
}                                                             //draw function