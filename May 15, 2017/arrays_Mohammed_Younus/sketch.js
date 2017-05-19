/* 
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
*/


var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome To The New", "I Can Only Imagine"];//array to hold each string in a different index so this a string array


function setup() {          //setup function
	createCanvas(1200, 800);  //creates canvas 1200 x 800
	background(255, 0, 0);    //red background

	for (i = 0; i < 8; i++) { // use a for loop() to go through the array by index starting with 0.
		// console.log(playlist[i]); // log the list to the console as a check if needed.
		stroke(255);      //white stroke
		fill(255);        //fills in white color
		textSize(38);     //size of text is 38
		text(playlist[i], i * 100 + 50, i * 100 + 50); // print each string by index, followed by spacing and location of the text.
	}// for loop
}//setup function

// nothing needs to be drawn here.
function draw() {//draw function

}//draw

