/* 
Basic P5 sketch.
Created by Dawn C. Hayes March 2017. 
Modified by Mohammed Younus
*/

// every P5 sketch (program) requires at least two functions: function setup() and function draw()
// function is a keyword that P5 recognizes as a funcition indicator
// setup() takes care of initializing the program and runs once.
function setup() { //parenthesis holds arguments or parameters.
  createCanvas(400, 400); // the createCanvas() function sets canvas size
}

//var blue = color(175, 100, 220);

// draw() takes care of items that are repeated until the canvas or browser window is closed. Animations can be set within the draw() loop
function draw() { // curly brackets contain a series of statements aka "lines of code".
  background(255); // the background() function sets background color
  ellipse(200, 200, 100, 100); //the ellipse function is used to draw an ellipse. Arguments are passed into the function to determine
  // location and size
  quad(0,0,100,0,100,100,0,100); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
  quad(300,300,400,300,400,400, 300, 400); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
  quad(300,0, 400, 0, 400, 100, 300, 100); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
  quad(0, 300, 100, 300, 100, 400, 0, 400); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
}