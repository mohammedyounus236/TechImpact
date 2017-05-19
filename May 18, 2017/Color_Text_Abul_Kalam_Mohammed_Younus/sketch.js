/*
Driver: Abul Kalam
Typer: Mohammed Younus
https://abulkalamsite.wordpress.com/2017/05/19/color-text-for-pair-code/
*/
 

 
function setup() { // the setup function is initial 
  createCanvas(600, 600); //creates canvas 600 by 600
  mousePressed();         //mousePressed function
}                         //setup function

function draw() {         //draw function

}                         //draw

function mousePressed(){              //mousePressed function
  fill(random(255), mouseX, mouseY);  //fills in the color for the text
  background(255);
  textSize(72);                       //size of the text
  text("Cool", 130, 200);             //Text
  fill(random(255), mouseY, mouseX);  //fills in the color for the text
  text("Color", 130, 400);            //Text
  fill(mouseX, mouseY, random(255));
  ellipse(300, 275, 100, 100);
}                                     //MousePressed

// 