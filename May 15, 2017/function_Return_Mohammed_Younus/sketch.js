/*
Code by Dawn C. Hayes March, 2017.
Commented by Mohammed Younus
*/

function setup() {              //setup function
  // var angle = degrees(PI/2);
  // console.log(angle);
  
  var km = milesToKm(26.3);     //changes miles to kilometers of 26.3
 console.log(km);               //prints out the kilometers
  
  var km2 = milesToKm(100);     //changes miles to kilometers of 100
  console.log(km2);             //prints out the kilometers
}

function milesToKm(miles) {     //defines the function milesToKm with miles in the parameters
  var km = miles * 1.6;         //the conversion formula for miles to km
  return km;                    //returns the kilometers to the function
}                               //milesToKm