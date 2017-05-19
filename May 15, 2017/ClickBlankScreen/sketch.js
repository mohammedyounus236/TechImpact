/*
Object with function
Created by Mohammed Younus
*/
var circle = {
	x: 400,
	y: 100,
	diam: 100,
	r: 255,
	g: 0,
	b: 0
}

var rectangle = {
	x: 50,
	y: 50,
	diam: 100,
	r: 0,
	g: 0,
	b: 255
}

var colorchange = function(){
  if (mouseIsPressed) {
      background(random(255, 255, 255));
    }
}

function setup() { 
  createCanvas(500, 500);
} 

function draw() { 
  background(0);
  fill(circle.r, circle.g, circle.b);
  ellipse(circle.x, circle.y, circle.diam, circle.diam);
  
  fill(rectangle.r, rectangle.g, rectangle.b);
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);
  colorchange();
}