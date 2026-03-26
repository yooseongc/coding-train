let p0, p1, p2;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  p0 = createVector(0, 300);
  p1 = createVector(300, 0);
  p2 = createVector(600, 300);
}

function draw() {
  background(0);
  p1.x = mouseX;
  p1.y = mouseY;

  stroke(255);
  strokeWeight(2);
  line(p0.x, p0.y, p1.x, p1.y);
  line(p1.x, p1.y, p2.x, p2.y);

  strokeWeight(16);
  point(p0.x, p0.y);
  point(p1.x, p1.y);
  point(p2.x, p2.y);

  for (let t = 0; t <= 1; t += 0.05) {
    let h = map(t, 0, 1, 0, 255);
    stroke(h, 255, 255);

    let v1 = p5.Vector.lerp(p0, p1, t);
    let v2 = p5.Vector.lerp(p1, p2, t);

    strokeWeight(4);
    line(v1.x, v1.y, v2.x, v2.y);

    let v3 = p5.Vector.lerp(v1, v2, t);
    strokeWeight(16);
    point(v3.x, v3.y);
  }
}
