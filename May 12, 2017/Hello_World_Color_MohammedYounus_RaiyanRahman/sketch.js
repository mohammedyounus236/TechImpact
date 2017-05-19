/*
Created
Driver: Mohammed Younus
Typer: Raiyan Rahman
*/

function setup() {                                    //setup function
  createCanvas(500, 500);                             //createCanvas
}                                                     //setup function

function draw() {//draw function
  background(0);  //background color
  
  for(var i = 0; i <= width; i +=50) { //for loop
      fill(mouseX, random(255), mouseY); //fills in the color
      rect(i, i, 40, 40);               //creates square
  }//for loop
  
  fill(random(255), mouseX, mouseY);  //fills in color for Hello
  text("HELLO", (150), (100));        //text to write Hello
  textSize(100);                      //size of Text
  fill(mouseX, mouseY, random(255));  //fills in color for World
  text("WORLD", 0, 475);              //creates text World
}//draw