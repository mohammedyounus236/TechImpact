/*
Created by Mohammed Younus
*/

var feettoinches = function (feet) { 	//function to convert feet to inches
  return (feet/12);										//formula to convert feet to inches
}																			//feettoinches

var milestofeet = function(miles){		//function to convert miles to feet
  return (miles*5280);								//formula to convert miles to feet
}																			//milestofeet

function setup() { 										//setup function
  //createCanvas(400, 400);						//creates canvas
  console.log(feettoinches(24));			//prints to the console
  console.log(milestofeet(1));				//prints to the console
} 																		//setup



