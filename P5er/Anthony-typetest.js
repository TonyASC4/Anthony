function setup (){
    createCanvas(400,300);
   
}

// Run this program to learn how each of these functions

// relate to the others 



void draw() { } // Empty draw() needed to keep the program running



void keyPressed() {

  println("pressed " + int(key) + " " + keyCode);

}



void keyTyped() {

  println("typed " + int(key) + " " + keyCode);

}



void keyReleased() {

  println("released " + int(key) + " " + keyCode);

}









var x = 200;
var WordCount = []
var Score = [0,1];
var WordsorLetters = ["Find", "Punitive", "Lucrative", "Stroke", "Jester"]; 

var newWords - words.split("");
console.log(newWords);


function draw (){
    background(150);
    textSize(32);
text("Finding", x, 30);
fill(0, 102, 153);
text("lucrative", x, 60);
fill(0, 102, 153, 51);
text("Damnation", x, 90);
var str = "Finding lucrative damnation";
var res = str.split("Finding lucrative damnation");
    
    //s = "The quick brown fox jumped over the lazy dog.";
//fill(50);
//text(s, 10, 10, 70, 80); // Text wraps within text box
  //  ellipse(x, 200, 16, 16);
    x--;
    
}