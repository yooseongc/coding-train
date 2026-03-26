
// https://en.wikipedia.org/wiki/Mandelbrot_set
// http://www.pi314.net/eng/mandelbrot.php

// The Mandelbrot set is the set of values of c in the complex plane
//   for which the orbit of the critical point z = 0 under iteration of the quadratic map
//   z_(n+1) = z_n ^ 2 + c
//      where c is a complex number
//   remain bounds.

// Thus, a complex number c is a member of the Mandelbrot set if, 
//    when starting with z_0 = 0 and applying the iteration repeatedly, 
//    the absolute value of z_n remains bounded for all n > 0.

let mandelbrotImg;

const digits = 8;

let c = 0.25;
const e = 1 / Math.pow(100, digits - 1);

let z = 0;
let iteration = 0;


function preload() {
    mandelbrotImg = loadImage('mandelbrot.jpg');
}

function setup() {
    createCanvas(1440, 1080).parent('#canvasDiv');
    c += e;
}

function draw() {

    for (let i = 0; i < 25691; i++) {
        if (z < 2) {
            z *= z;
            z += c;
            iteration++;
        } else {
            noLoop();
            break;
        }
    }

    background(mandelbrotImg);
    fill(255);
    textSize(48);
    textAlign(CENTER);
    let s = nf(iteration, digits);
    s = s.substring(0, 1) + '.' + s.substring(1);
    text(s,width / 2 + 250, height / 2 + textDescent());
}
