
// https://learn.ml5js.org/#/reference/pitch-detection
// https://github.com/marl/crepe
// https://github.com/ml5js/ml5-data-and-models/tree/master/models/pitch-detection/crepe

const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

const GUITAR_NOTES = {
    'E2': 082.41,
    'A2': 110.00,
    'D3': 146.83,
    'G3': 196.00,
    'B3': 246.94,
    'E4': 329.63,
};

const UKULELE_NOTES = {
    'G4': 392.00,
    'C4': 261.63,
    'E4': 329.63,
    'A4': 440.00,
}

let pitch;
let mic;
let freq = 0;
const threshold = 1;
let audioContext;
let notes;

function setup() {
    createCanvas(400, 400).parent('#canvasDiv');
    audioContext = getAudioContext();
    mic = new p5.AudioIn();

    selection = createSelect();
    selection.option('Ukulele');
    selection.option('Guitar');
    selection.changed(() => {
        const value = selection.value();
        if (value == 'Guitar') {
            notes = GUITAR_NOTES;
        } else if (value == 'Ukulele') {
            notes = UKULELE_NOTES;
        }
    });
    selection.value('Guitar');
    notes = GUITAR_NOTES;

    const gotPitch = (error, frequency) => {
        if (error) {
            console.error(error);
        } else {
            if (frequency) {
                freq = frequency;
            }
            pitch.getPitch(gotPitch);
        }
    };
    const modelLoaded = () => {
        pitch = ml5.pitchDetection(
            model_url,
            audioContext,
            mic.stream,
            () => {
                console.log('model loaded.');
                pitch.getPitch(gotPitch);
            }
        );
    };
    mic.start(modelLoaded);
}


function draw() {
    background(51);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(32);
    text(freq.toFixed(2), width / 2, height - 150);

    let closestNote = -1;
    let recordDiff = Infinity;
    for (const [note, frequency] of Object.entries(notes)) {
        const diff = freq - frequency;
        if (abs(diff) < abs(recordDiff)) {
            recordDiff = diff;
            closestNote = note;
        }
    }

    textSize(64);
    text(closestNote, width / 2, height - 50);

    const diff = recordDiff;
    const alpha = map(abs(diff), 0, 100, 255, 0);
    rectMode(CENTER);
    fill(255, alpha);
    stroke(255);
    strokeWeight(1);
    if (abs(diff) < threshold) {
        fill(0, 255, 0);
    }
    rect(200, 100, 200, 50);

    stroke(255);
    strokeWeight(4);
    line(200, 0, 200, 200);

    noStroke();
    fill(255, 0, 0);
    if (abs(diff) < threshold) {
        fill(0, 255, 0);
    }
    rect(200 + diff / 2, 100, 10, 75);
}
