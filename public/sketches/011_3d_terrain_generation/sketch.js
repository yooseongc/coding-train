
let cols, rows;
let scale = 20;
let w = 1000;
let h = 800;

let flying = 0;
let terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scale;  
  rows = h / scale;

  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  flying -= 0.05;
  // flying = 0;
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  background(0);
  //noStroke();
  //translate(0, 50);
  //translate(w / 2, h / 2);
  //translate(w/2,0);
  rotateX(PI / 3); // 30도
  fill(200, 200, 200, 150);
  //stroke(255);
  //noFill();
  translate(-w / 2, -h /2);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * scale, y * scale, terrain[x][y]);
      vertex(x * scale, (y + 1) * scale, terrain[x][y+1]);
      // vertex(x * scale, y * scale, 0);
      // vertex(x * scale, (y + 1) * scale, 0);
    }
    endShape();
  }
}
