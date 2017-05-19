/* 
Code by Dawn C. Hayes March, 2017.
Modified by Mohammed Younus
Bonus Project
*/

var diam = 200;     //creates variable diam with value of 200
var bgCol = 255;    //creates variable bgCol with value of 255
var bgSwitch = 0;   //creates variable bgSwitch with value of 0

function setup() {                              //setup function
	createCanvas(400, 400);                       //creates canvas 400 x 400
	background(bgCol);                            //sets background color
	noStroke();                                   //no stroke on shape
	fill(255, 0, 0);                              //sets color to red
	ellipse(width / 2, height / 2, diam, diam);   //creatse circle at center of the screen, with size of diam 
}


function draw() {                               //draw function
if (mouseIsPressed) {			//if mouse is pressed
  background(bgSwitch); 	//changes the background color
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {//if mouse is pressed inside circle
      noStroke();                                   //makes sure there is no stroke
      fill(0, 255, 0);															//changes color to blue
      ellipse(width / 2, height / 2, diam, diam);		//creates circle at the center with size 
    }
  else{                       										//else
		noStroke();                                   //makes sure there is no stroke
		fill(0, 0, 255);                              //changes color to blue
		ellipse(width / 2, height / 2, diam, diam);   //creates circle at the center with size 
  }
  }
}
