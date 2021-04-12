
// let xoff = 0;
// let yoff = 10000;

let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    let y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  start += inc;
  // console.log(start);
  // noLoop();
  // let x = map(noise(xoff), 0, 1, 0, width);
  // let y = map(noise(yoff), 0, 1, 0, height);

  // xoff += 0.02;
  // yoff += 0.02;

  // ellipse(x, y, 24, 24);
}
