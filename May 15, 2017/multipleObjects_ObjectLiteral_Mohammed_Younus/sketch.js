/* 
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
*/


var circle = {      //creates circle object
	x: 200,           //value of circle object x is 200
	y: 200,           //value of circle object y is 200
	diam: 50,         //value of circle object diam is 50
	r: 255,           //value of circle object r is 255
	g: 123,           //value of circle object g is 123
	b: 25             //value of circle object b is 25
}                   //circle object


var rectangle = {   //creates a rectangle object
	x: 100,           //value of rectangle object x is 100
	y: 100,           //value of rectangle object y is 100
	diam: 75,         //value of rectangle object diam is 75
	r: 15,            //value of rectangle object r is 15
	g: 33,            //value of rectangle object g is 33
	b: 225            //value of rectangle object x is 225
}                   //rectangle


function setup() {          //setup function
	createCanvas(400, 400);   //creates canvas 400x400
}                           //setup function

  
function draw() {                                                   //draw function
	background(34, 123, 218);                                         //changes the background color
	noStroke();                                                       //has no stroke
	fill(circle.r, circle.g, circle.b);                               //fills in the ellipse from the attributes of the circle object
	ellipse(circle.x, circle.y, circle.diam, circle.diam);            //creates ellipse from the attributes of the circle object
	fill(rectangle.r, rectangle.g, rectangle.b);                      //fills in rect with the attributes of the rectangle object
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);   //creates rect with the attributes of the rectangle object
}                                                                   //draw function