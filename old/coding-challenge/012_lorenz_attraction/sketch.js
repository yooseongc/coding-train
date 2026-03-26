
let x = 0.01;
let y = 0;
let z = 0;
let p = {x, y, z};

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let points = new Array();

function setup() {
  createCanvas(800, 600, WEBGL);
  colorMode(HSB);
}

function lorenz(point, a, b, c, dt) {
  // dx/dt = a * (y - x)
  // dy/dt = x * (b - z) - y
  // dz/dt = x * y - c * z
  const {x, y, z} = point;
  const dx = (a * (y - x)) * dt;
  const dy = (x * (b - z) - y) * dt;
  const dz = (x * y - c * z) * dt;
  return {x: x+dx, y: y+dy, z: z+dz};
}

function draw() {
  background(0);

  const dt = 0.01;
  p = lorenz(p, a, b, c, dt);
  
  points.push(new p5.Vector(p.x, p.y, p.z));

  translate(0, 0, -80);
  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, (height / 2.0) / tan(PI * 30 / 180), 0, 0, 0, 0, 1, 0);
  scale(5);
  stroke(255);
  noFill();

  let hu = 0;
  beginShape();
  for (let v of points) {
    stroke(hu, 255, 255);
    vertex(v.x, v.y, v.z);
    hu += 1;
    if (hu > 255) hu = 0;
  }
  endShape();

  // println(x, y, z);
}
