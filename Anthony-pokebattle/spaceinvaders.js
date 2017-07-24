var ship;
function setup(){
    createCanvas(600,600);
}
function draw(){
    background(0);
    ship = new Ship(width/2, height + 50, 1, 1, 50, 50, [255, 255, 255]);
}
function Ship(x, y, xs, w, h, color){
    this.x=x;
    this.y=y;
    this.xspeed=xspeed;
    this.w=w;
    this.h=h;
    this.color=color;

this.show = function(){
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.x, ths.y, this.w, this.h);
}
this.update = function(){
    this.x+=this.xspeed;
    if(KeyCode==LEFT_ARROW)

{
    console.log("left");
}
}
}

this.update = function(){
     ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
