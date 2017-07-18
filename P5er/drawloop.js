function setup (){
    createCanvas(400,300)
   

var x = 200;

function draw (){
    background(200);
    s = "The quick brown fox jumped over the lazy dog.";
fill(50);
text(s, 10, 10, 70, 80); // Text wraps within text box
    ellipse(x, 200, 16, 16);
    x++;
    
}