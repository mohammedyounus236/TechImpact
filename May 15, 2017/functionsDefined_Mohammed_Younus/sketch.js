/*
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
*/

var blip = {      //object called blip
  x: 0,           //x attribute with value 0 of blip object
  y: 100,         //y attribute with value 100 of blip object
  xspeed: 4,      //xspeed attribute with value 4 of blip object
}                 //object called blip

var blip2 = {     //object called blip
  x: 0,           //x attribute with value 0 of blip object
  y: 200,         //y attribute with value 200 of blip object
  xspeed: 4,      //xspeed attribute with value 4 of blip object
}                 //object called blip

var blip3 = {     //object called blip
  x: 600,         //x attribute with value 600 of blip object
  y: 200,         //y attribute with value 200 of blip object
  xspeed: 4,      //xspeed attribute with value 4 of blip object
}                 //object called blip

var blip4 = {     //object called blip
  x: 600,         //x attribute with value 600 of blip object
  y: 300,         //y attribute with value 300 of blip object
  xspeed: 4,      //xspeed attribute with value 4 of blip object
}                 //object called blip

function setup() {          //setup function
  createCanvas(600, 400);   //creates canvas of 600 x 400
	background(0);            //changes background to 0
}                           //setup function

function draw() {           //draw function
  move();                   //move function
  display();                //display function
}                           //draw

function move() {                   //move function
	blip.x = blip.x + blip.xspeed;    //changes location of the first blip
	blip2.x = blip2.x + blip2.xspeed; //changes location of the second blip
	blip3.x = blip3.x - blip3.xspeed; // use - to move the x position to the left.
	blip4.x = blip4.x - blip4.xspeed; //changes location of the fourth blip
}                                   //move