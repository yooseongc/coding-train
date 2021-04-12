
let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(200, 200);
}

function draw() {

  let xoff = 0;
  let yoff = 0;

  background(51);
  loadPixels();

  for (let y = 0; y < width; y++) {
    xoff = 0;
    for (let x = 0; x < height; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255; 

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels()
}
