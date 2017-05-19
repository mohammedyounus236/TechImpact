/*
Created by Mohammed Younus
*/

var txt = ["This", "is", "text"];	//Array that holds text

function setup() { 							//setup function
  createCanvas(400, 400);				//creates canvas 400 x 400
} 															//setup function

function draw() { 							//draw function
  background(0);								//background color to black
  textSize(50);									//size of text
  stroke(255, 0, 0);						//stroke to red
  strokeWeight(4);							//thickness of stroke
  fill(0, 0, 255);							//fills in the color of text
  text(txt[0], 50, 100);				//displays first index of the array
  stroke(0, 255, 0);						//stroke to green
  strokeWeight(4);							//thickness of stroke
  fill(0, 0, 255);							//fills in the color of text
  text(txt[1], 150, 200);				//displays second index of the array
  stroke(0, 0, 255);						//stroke to blue
  strokeWeight(4);							//thickness of stroke
  fill(255, 0, 0);							//fills in the color of text
  text(txt[2], 250, 300);				//displays second index of the array
}																//draw