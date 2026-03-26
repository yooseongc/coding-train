
let inc = 0.1;
let scale = 10;
let cols, rows;
let fr;

let zoff = 0;
let particles = [];
let flowfield;

function setup() {
  // frameRate(10);
  createCanvas(600, 600);
  cols = floor(width / scale);
  rows = floor(height / scale);
  fr = createP('');
  particles[0] = new Particle();
  flowfield = new Array(cols * rows);
  for (let i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }
  background(255);
}

function draw() {

  let xoff = 0;
  let yoff = 0;

  

  for (let y = 0; y <= rows; y++) {
    xoff = 0;
    for (let x = 0; x <= cols; x++) {
      let index = x + y * cols;
      
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;

      xoff += inc;
      stroke(0, 50);
      strokeWeight(1);
      push();
      translate(x * scale, y * scale);
      rotate(v.heading());
      // line(0, 0, scale, 0);
      pop();
      //fill(r);
      //rect(x * scale, y * scale, scale, scale);
    }
    yoff += inc;
  }
  zoff += 0.0003;
  
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
    
  }
  

  fr.html(floor(frameRate()));

  // noLoop();
}
