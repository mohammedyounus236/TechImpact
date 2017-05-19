/*
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
array of objects
*/

var stars = []; // declares an empty array
var moon;       // creates moon  

function setup() {        //setup function
  createCanvas(600, 400); //creates canvas with 600 x 400

  for (var i = 0; i < 400; i++) { // for loop to iterate through the loop and increment
    stars[i] = { // object array
      x1: random(0, width), // place x position randomly between 0 and width
      y1: random(0, height), // place y position randomly between 0 and width
      display: function() {         //display
        stroke(random(225));        //random color for the stroke between 0 and 255
        point(this.x1, this.y1);    
      }//display
    }//star object
  }//for loop
  moon = {      // moon object
    x: 100,     //attribute x with value 100
    y: 350,     //attribute y with value 350
    diam: 100,  //attribute diam with value 100
    xspeed: .5, //attribute xspeed with value .5
    yspeed: .5, //attribute yspeed with value .5
  }             //moon

  cloud = {     //cloud object
    x: 50,      //attribute x with value 50
    y: 150,     //attribute y with value 150
    diam: 75,   //attribute diam with value 75
    col: 255    //attribute col with value 255
  }             //cloud
}//setup


function draw() {                           //draw function
  background(0, 14, 35);                    //changes background color
  for (var i = 0; i < stars.length; i++) {  //iterate through the stars array
    stars[i].display();                     //display each star
  }                                         //for loop
  noStroke();                               //no stroke
  fill(225, 225, 134);                      //fills in color of ellipse
  ellipse(moon.x, moon.y, moon.diam, moon.diam);  //ellipse created with the value from the moon object

  if (moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) {  //if the moon is out of bound of the coordinates
    moon.x = moon.x + moon.xspeed;                                      //changes the x location of the moons
    moon.y = moon.y - moon.yspeed;                                      //changes the y location of the moons
  }                                                                     //if

  noStroke();                                                           //no stroke
  fill(cloud.col);                                                      //fills in the ellipse
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);                    //creates circle
  ellipse(cloud.x + 30, cloud.y - 15, cloud.diam, cloud.diam + 35);     //creates circle
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);          //creates circle
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);               //creates circle
  ellipse(cloud.x + 30, cloud.y + 15, cloud.diam + 70, cloud.diam);     //creates circle
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);          //creates circle

  noStroke();                                                           //no stroke
  fill(cloud.col);                                                      //fills in the ellipse
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);                    //creates circle
  ellipse(cloud.x + 90, cloud.y - 15, cloud.diam, cloud.diam + 70);     //creates circle
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);          //creates circle
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);               //creates circle
  ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud.diam);     //creates circle
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);          //creates circle

}//draw function