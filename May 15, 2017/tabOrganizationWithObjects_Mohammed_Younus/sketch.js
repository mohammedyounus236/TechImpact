/* 
Multiple objects created with their own files
The circle object and the rectangle object are called from the HTML file using the lines below
<script src="circle.js" type="text/javascript"></script>
<script src="rectangle.js" type="text/javascript"></script>

Code by Dawn C. Hayes March, 2017.	
Commented by Mohammed Younus
*/


function setup() {          //setup function
	createCanvas(400, 400);   //creates canvas 400x400
}                           //setup function


function draw() {                                                   //draw function
	background(34, 123, 218);                                         //sets the background color
	noStroke();                                                       //no stroke
	fill(circle.r, circle.g, circle.b);                               //fills in the ellipse from the circle object of the separate file
	ellipse(circle.x, circle.y, circle.diam, circle.diam);            //creates ellipse from the attributes of the circle object
	fill(rectangle.r, rectangle.g, rectangle.b);                      //fills in the color of the rect from the rectangle object
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);   //creates a rect from the attributes of the rectangle object
}                                                                   //draw