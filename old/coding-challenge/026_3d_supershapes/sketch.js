
const globe = [];
const r = 200;
const total = 25;
let angleX = 0;
let angleY = 0;
let offset = 0;

let a = 1;
let b = 1;
let m = 0;
let mchange = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  colorMode(HSB);
  // noStroke();
  strokeWeight(2);
  stroke(200);
}

function supershape(theta, m, n1, n2, n3) {
  let t1 = abs((1 / a) * cos(m * theta / 4));
  t1 = pow(t1, n2);
  let t2 = abs((1/ b) * sin(m * theta / 4));
  t2 = pow(t2, n3);
  let t3 = t1 + t2;
  let r = pow(t3, - 1 / n1);
  return r;
}

function draw() {
  
  // m = map(sin(mchange), -1, 1, 0, 7);
  // mchange += 0.02;
  m = 7;

  background(0);
  
  for (let i = 0; i < total + 1; i++) {
    globe[i] = [];
    const lat = map(i, 0, total, 0, PI);
    const r2 = supershape(lat, m, 0.2, 1.7, 1.7);
    for (let j = 0; j < total + 1; j++) {
      const lon = map(j, 0, total, 0, TWO_PI);
      const r1 = supershape(lon, m, 0.2, 1.7, 1.7);
      const x = r * r1 * sin(lat) * cos(lon);
      const y = r * r1 * sin(lat) * sin(lon);
      const z = r * r2 * cos(lat);
      globe[i][j] = createVector(x, y, z);
    }
  }

  rotateX(angleX);
  rotateY(angleY);
  offset += 5;
  for (let i = 0; i < total; i++) {
    let hu = map(i, 0, total, 0, 255);
    fill((hu + offset) % 255, 255, 255);
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total + 1; j++) {
      const v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      const v2 = globe[i+1][j];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }
  angleX += 0.005;
  angleY += 0.006;
}
