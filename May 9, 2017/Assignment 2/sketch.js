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
  fill(255);      //fills in the color of the eclipse to be white
  strokeWeight(4);  //the weight of the outline
  stroke(51);       //sets the color of the outline to be black
  ellipse(200, 200, 100, 100); //the ellipse function is used to draw an ellipse. Arguments are passed into the function to determine
  // location and size
  
  stroke('red');    //sets the outline color to red
  strokeWeight(4);  //sets the weight of the outline
  fill(51);         //sets the quad to the color black
  quad(0,0,100,0,100,100,0,100); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
  
  stroke(color(0, 0, 255));    //sets the outline color to blue
  strokeWeight(4);  //sets the weight of the outline
  fill(51);         //sets the quad to the color black
  quad(300,300,400,300,400,400, 300, 400); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
  
  stroke('rgb(0,255,0)');    //sets the outline color to red
  strokeWeight(4);  //sets the weight of the outline
  fill(51);         //sets the quad to the color black
  quad(300,0, 400, 0, 400, 100, 300, 100); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
  
  stroke('#fae');    //sets the outline color to red
  strokeWeight(4);  //sets the weight of the outline
  fill(51);         //sets the quad to the color black
  quad(0, 300, 100, 300, 100, 400, 0, 400); //a quad function that is used to draw a square or rectangle. Arguments represent x followed by y coordinates, going in a clockwise motion per coordinate
}