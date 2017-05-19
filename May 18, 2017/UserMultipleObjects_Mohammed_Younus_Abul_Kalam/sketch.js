/*
Driver: Mohammed Younus
Typer: Abul Kalam

https://mohammedyounus236.wordpress.com/2017/05/19/user-multiple-objects/
*/

var backgroundcolor = prompt("What basic color do you want the background?");           //asks user for background color

var color1 = prompt("What basic color do you want the circle? (Type it in as text)");   //asks user for circle color

var color2 = prompt("What basic color do you want the square? (Type it in as text)");   //asks user for rectangle color

var circle = {    //circle object
  x: 100,         //x value of circle object
  y: 100,         //y value of circle object
  diam: 100       //size of circle
}                 //circle

var rectangle = { //rectangle object
  x: 50,         //x value of rectangle
  y: 450,         //y value of rectangle
  diam: 100       //size of rectangle
}                 //rectangle


function setup() {        //setup function
  createCanvas(600, 600); //canvas 400 by 400
}                         //setup

function draw() {                                                   //draw function
  background(backgroundcolor);                                      //changes background color
  fill(color1);                                                     //changes circle color
  ellipse(circle.x, circle.y, circle.diam, circle.diam);            //creates circle from object
  fill(color2);                                                     //changes rectanlge color
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);   //creates rectangle from object
}                                                                   //draw function