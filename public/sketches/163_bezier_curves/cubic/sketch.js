class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-2, 2);
    this.dy = random(-2, 2);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > width) this.dx *= -1;
    if (this.y < 0 || this.y > height) this.dy *= -1;
  }
}

let p0, p1, p2, p3;

function quadratic(pa, pb, pc, t) {
  let v1 = createVector(lerp(pa.x, pb.x, t), lerp(pa.y, pb.y, t));
  let v2 = createVector(lerp(pb.x, pc.x, t), lerp(pb.y, pc.y, t));

  strokeWeight(4);
  line(v1.x, v1.y, v2.x, v2.y);

  let v3 = createVector(lerp(v1.x, v2.x, t), lerp(v1.y, v2.y, t));
  strokeWeight(8);
  point(v3.x, v3.y);
  return v3;
}

function cubic(pa, pb, pc, pd, t) {
  let v1 = quadratic(pa, pb, pc, t);
  let v2 = quadratic(pb, pc, pd, t);

  strokeWeight(4);
  line(v1.x, v1.y, v2.x, v2.y);

  let v3 = createVector(lerp(v1.x, v2.x, t), lerp(v1.y, v2.y, t));
  strokeWeight(16);
  point(v3.x, v3.y);
  return v3;
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  p0 = new Particle(0, height / 2);
  p1 = new Particle(width / 4, 0);
  p2 = new Particle((3 * width) / 4, height);
  p3 = new Particle(width, height / 2);
}

function draw() {
  background(0);

  p1.update();
  p2.update();

  stroke(255);
  strokeWeight(2);
  line(p0.x, p0.y, p1.x, p1.y);
  line(p1.x, p1.y, p2.x, p2.y);
  line(p2.x, p2.y, p3.x, p3.y);

  strokeWeight(16);
  point(p0.x, p0.y);
  point(p1.x, p1.y);
  point(p2.x, p2.y);
  point(p3.x, p3.y);

  for (let t = 0; t <= 1; t += 0.03) {
    let h = map(t, 0, 1, 0, 255);
    stroke(h, 255, 255);
    cubic(p0, p1, p2, p3, t);
  }
}
