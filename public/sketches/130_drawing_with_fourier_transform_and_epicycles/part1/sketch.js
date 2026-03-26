
// https://en.wikipedia.org/wiki/Discrete_Fourier_transform
// https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%82%B0_%ED%91%B8%EB%A6%AC%EC%97%90_%EB%B3%80%ED%99%98
// https://en.wikipedia.org/wiki/Epicycloid
// https://www.algorithm-archive.org/contents/cooley_tukey/cooley_tukey.html

/*
    Using Discrete Fourier Transform Algorithm

    In mathematics, the discrete Fourier transform (DFT) converts 
      a finite sequence of equally-spaced samples of a function 
      into a same-length sequence of equally-spaced samples of 
      the discrete-time Fourier transform (DTFT),
      which is a complex-valued function of frequency.

    Epicycloid

    In geometry, an epicycloid or hypercycloid is a plane curve 
      produced by tracing the path of a chosen point on the circumference 
      of a circle—called an epicycle—which rolls without slipping around a fixed circle. 
    It is a particular kind of roulette.

    Epicycle
    
    The epicycle was a geometric model used to explain the variations in speed and direction 
      of the apparent motion of the Moon, Sun, and planets.
    In particular it explained the apparent retrograde motion of the five planets known at the time.
    Secondarily, it also explained changes in the apparent distances of the planets from the Earth.

    Any path — periodic or not, closed or open — can be represented with an infinite number of epicycles.
    This is because epicycles can be represented as a complex Fourier series; 
      so, with a large number of epicycles, very complicated paths can be represented in the complex plane.
    

*/


const x = [];
const y = [];
let fourierX;
let fourierY;
let time = 0;
const path = [];

function setup() {
    createCanvas(800, 600);

    const skip = 8;
    drawing.filter((_, i) => i % skip === 0).forEach(d => {
        x.push(d.x);
        y.push(d.y);
    });
    fourierX = dft(x);
    fourierY = dft(y);

    fourierX.sort((a, b) => b.amp - a.amp);
    fourierY.sort((a, b) => b.amp - a.amp);

}

function epiCycles(x, y, rotation, fourier) {
    for (const { freq, amp, phase } of fourier) {
        const px = x;
        const py = y;
        x += amp * cos(freq * time + phase + rotation);
        y += amp * sin(freq * time + phase + rotation);

        stroke(255, 100);
        noFill();
        ellipse(px, py, amp * 2);
        stroke(255);
        line(px, py, x, y);
    }
    return createVector(x, y);
}

function draw() {
    background(51);

    const vx = epiCycles(width / 2 + 100, 100, 0, fourierX);
    const vy = epiCycles(100, height / 2 + 100, HALF_PI, fourierY);
    const v = createVector(vx.x, vy.y);
    path.unshift(v);
    line(vx.x, vx.y, v.x, v.y);
    line(vy.x, vy.y, v.x, v.y);

    noFill();
    beginShape();
    for (const p of path) {
        vertex(p.x, p.y);
    }
    endShape();

    const dt = TWO_PI / fourierY.length;
    time += dt;

    if (time > TWO_PI) {
        time = 0;
        path.length = 0;
    }
}
