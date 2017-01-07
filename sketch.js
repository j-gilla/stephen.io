var blob;

var blobs = [];

function setup(){
  createCanvas(600,400)
  blob = new Blob(64);
  for (var i = 0; i < 10; i++){
    blobs[i] = new Blob(16);
  }
}

function draw(){
  background(0);
  blob.show()
  for (var i = 0; i < blobs.lenght; i ++){
    blobs[i].show();
  }
}
