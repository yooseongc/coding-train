
// https://en.wikipedia.org/wiki/Recam%C3%A1n%27s_sequence
// https://mathworld.wolfram.com/RecamansSequence.html
// http://oeis.org/A005132
// https://tonejs.github.io/
// https://en.wikipedia.org/wiki/Piano_key_frequencies

/*

Recaman's sequence

 * In mathmatics and computer science, the Recaman's sequence is a well known sequence
    defined by a recurrence relation, because its elements are related to the previous elements
    in a straightforward way, they are often defined using recursion.
    
 * It takes its name after its inventor Bernardo Recaman Santos(1954~), a Colombian mathmatician.

 * Definition
    The Recaman's sequence a_0, a_1, a_2, ... is defined as:
      
             0            if n = 0
      a_n =  a_(n-1) - n  if a_(n-1) - n > 0 and is not already in the sequence
             a_(n-1) + n  otherwise

    The first terms of the sequence are:
      0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42, 63, ...

 * On-line encyclopedia of integer sequences (OEIS)
      -> http://oeis.org/A005132

 * Properties
      - a_n >= 0
      - | a_n - a_(n-1) | = n

 * Visual representation, Sound representation
    -> This example

 * Piano key frequencies

    nth key => frequency
    f(n) = pow(sqrt(2, 1/12), n-49) * 440 Hz

    A4 = A440 is the 49th key on teh idealized standard piano

*/

let mute = true;

const numbers = [];  // existance check array
const sequence = []; // a_n
let count; // n 
let index; // existance check idx, a_(n-1)

const arcs = [];
let scl = 0;     // scale factor
let biggest = 0; // for scaling

// sound setting


const attackLevel = 1;
const releaseLevel = 0;

const attackTime = 0.01;
const decayTime = 0.1;
const susPercent = 0.5;
const releaseTime = 0.5;

let osc;  // oscillation
let env;  // envelop

let sound;

function preload() {
    // sound = loadSound('https://tonejs.github.io/audio/salamander/A4.mp3');
}

function setup() {

    //sound.loop();
    createCanvas(800, 600);
    
    const muteCheckBox = createCheckbox('mute', mute);
    muteCheckBox.mouseClicked(() => {
        mute = muteCheckBox.checked();
        if (!mute) {
            env.play();
            // sound.play();
        } 
    });

    const restartButton = createButton('Restart');
    restartButton.mouseClicked(restart);

    frameRate(5);
    background(0);

    env = new p5.Envelope();
    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
    env.setRange(attackLevel, releaseLevel);
    
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.amp(env);
    osc.start();
    
    // case of n = 0
    index = 0;
    numbers[index] = true;  // 0 is enrolled.
    sequence.push(index);
    count = 1;
}

function restart() {
    numbers.length = 0;
    sequence.length = 0;
    arcs.length = 0;
    index = 0;
    numbers[index] = true;  // 0 is enrolled.
    sequence.push(index);
    count = 1;
}

function step() {
    // not already in sequence and current > 0  --> a_n = a_(n-1) - n, else a_(n-1) + n
    let next = index - count;  // a_(n-1) - n
    next = (next > 0 && !numbers[next]) ? next : index + count;  // a_n
    numbers[next] = true;      // enroll a_n
    sequence.push(next);       // push a_n to sequence
    arcs.push(new Arc(index, next, count % 2));
    index = next;

    if (index > biggest) {
        biggest = index;
    }

    count++; // n = n + 1

    if(!mute) {
        const n = (index % 25) + 48;
        const freq = pow(2, (n - 49) / 12) * 440;
        osc.freq(freq);
        env.play();
    }
}

function draw() {
    background(0);
    step();
    translate(0, height / 2);
    scl = lerp(scl, width / biggest, 0.1);
    scale(scl);

    for (const a of arcs) {
        a.show();
    }

    if(count >= width) {
        noLoop();
    }
}

class Arc {

    constructor(start, end, dir) {
        this.start = start;
        this.end = end;
        this.dir = dir;
    }

    show() {
        const diameter = abs(this.end - this.start);
        const x = (this.end + this.start) / 2;
        stroke(255);
        strokeWeight(0.5);
        noFill();
        if (this.dir === 0) {
            arc(x, 0, diameter, diameter, PI, 0);
        } else {
            arc(x, 0, diameter, diameter, 0, PI);
        }
    }

}