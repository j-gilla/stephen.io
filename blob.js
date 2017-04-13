function Blob(x,y,r) {
  this.pos = createVector(x,y);
  this.r = 64;

  this.show = function(){
    fill(255)
      ellipse(this.pos.x, this.pos .y, this.r*2,this.r*2);
  }
}
