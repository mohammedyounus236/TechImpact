/*
Created by
Typer: Mohammed Younus
Driver: Raiyan Rahman

Raiyan was trying have the two shapes collide with each other and once they did, they would change to a random color but start out as white
*/

var x = 0;          //x location of rectangle
var y = 0;          //y location of rectangle
var speed = 2;      //speed of movement
var circSize = 100; //circle size
var recSize = 100;  //rectangle size
var w = 548;        //x location of circle
var v = 52;         //y location of circle

function setup() {
  createCanvas(600,600);  //creates canvas
}

function draw() {
  background(125);        //gray background
  x = x + speed;          //change location of rectangle
  w = w - speed;          //change location of ellipse
  rect(x, y, recSize, recSize);       //rectangle
  ellipse(w, v, circSize, circSize);  //circle
  if(x == w){                         //if the circle and square collide
    fill(random(255),random(255), random(255))  //change it to a random color
  }//if
  
}//draw