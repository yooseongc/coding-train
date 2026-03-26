
// https://en.wikipedia.org/wiki/Fourier_series
// https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/

/*
    In mathematics, a Fourier series is a periodic function composed of
        harmonically related sinusoids, combined by a weighted summation.
    With appropriate weights, one cycle of the summation can be made to approximate
        an arbitrary function in that interval (or the entire function if it too is periodic).
    As such, the summation is a synthesis of another function.
    The discrete-time Forier transform is an example of Fourier series.
    The process of deriving weights that describe a given function is a form of Fourier analysis.
    For functions on unbounded intervals, the analysis and synthesis analogies are
        Fourier transform and inverse transform.

    Fourier series, sine-cosine form
    S_N(x) = a0 / 2 + sum(a_n * cos(2 * PI / P * n * x) + b_n * sin(2 * PI / P * n * x)) 
        where
            a_n = 2 / P * integral_in_P_by_dx(s(x) * cos(2 * PI / P * n * x))
            b_n = 2 / P * integral_in_P_by_dx(s(x) * sin(2 * PI / P * n * x))
    
        P : interval
        n : 1 to N (theoretically infinite)
        a0 = 2 / P * integral_in_P_by_dx(s(x))

    In this case, we express 'Square Wave' Fourier series by drawing circles.

    y = 4 * sin(theta) / PI + 4 * sin(3 * theta) / (3 * PI) + 4 * sin(5 * theta) / (5 * PI) + ...
      = sum of [4 * sin(n * theta) / (n * PI)]
    x = 4 * cos(theta) / PI + 4 * cos(3 * theta) / (3 * PI) + 4 * cos(5 * theta) / (5 * PI) + ...
      = sum of [4 * cos(n * theta) / (n * PI)]

*/

let time = 0;
const wave = [];
const path = [];

let slider;
let para;

function setup() {
    createCanvas(600, 400);
    slider = createSlider(1, 200, 5, 1);
    para = createP('');
}

function draw() {
    background(51);

    para.html(`n = ${slider.value()}`);
    
    // draw circles
    translate(150, 200);
    let x = 0;
    let y = 0;
    for (let i = 0; i < slider.value(); i++) {
        const prevX = x;
        const prevY = y;
        const n = i * 2 + 1;
        const radius = 75 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        
        stroke(255, 100);
        noFill();
        ellipse(prevX, prevY, radius * 2);

        stroke(255);
        line(prevX, prevY, x, y);
    }

    wave.unshift(y);

    // draw waves
    translate(200, 0); // translation is accumulated.
    line(x - 200, y, 0, wave[0]);
    beginShape();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    time += 0.05;

    if (wave.length > 250) {
        wave.pop();
    }

}
