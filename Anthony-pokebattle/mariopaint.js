function setup(){
    createCanvas(600,600);
    background(100);
}

function mouseDragged(){
    // noStroke();
    fill(random(255),random(255),random(255));
    ellipse(mouseX, mouseY,random(20),random(20));
}

// function mousePressed(){
//     clear();
// }