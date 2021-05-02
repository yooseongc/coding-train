
// https://en.wikipedia.org/wiki/Toothpick_sequence
// https://oeis.org/A139250
// https://oeis.org/A139250/a139250.anim.html

/* 

    In geometry, the toothpick sequence is a sequence of 2-D patterns 
        which can be formed by repeatedly adding line segments ('toothpicks') to the previous pattern
        in the sequence.
    The first stage of the design is a single "toothpick", or line segment. 
    Each stage after the first is formed by taking the previous design and, 
        for every exposed toothpick end, placing another toothpick centered at a right angle on that end.

    This process results in a pattern of growth 
        in which the number of segments at stage n oscillates with a fractal pattern between 0.45*n^2 and 0.67*n^2.
    If T(n) denotes the number of segments at stage n, 
        then values of n for which T(n)/n^2 is near its maximum occur when n is near a power of two,
        while the values for which it is near its minimum occur near numbers that are approximately 1.43 times a power of two.
    The structure of stages in the toothpick sequence often resemble the T-square fractal, 
        or the arrangement of cells in the Ulam–Warburton cellular automaton.

    0, 1, 3, 7, 11, 15, 23, 35, 43, 47, 55, 67, 79, 95, 123, 155, 171, 175, 183, 195, 207, 
    223, 251, 283, 303, 319, 347, 383, 423, 483, 571, 651, 683, 687, 695, 707, 719, 735, 763, 
    795, 815, 831, 859, 895, 935, 995, 1083, 1163, 1199, 1215, 1243, 1279, 1319, 1379 ...


*/

const sequence = [];
const toothPicks = [];
const len = 63;

let minX;
let maxX;

let sequenceP;

function setup() {
    frameRate(10);
    createCanvas(600, 600);
    minX = - width / 2;
    maxX = width / 2;
    toothPicks.push(new Toothpick(0, 0, 1));
    sequence.push(...[0, 1]);

    sequenceP = createP(sequence.reduce((a, c) => a += ' ' + c), '');
}

function draw() {
    background(220);
    translate(width / 2, height / 2);
    const factor = width / (maxX - minX);
    scale(factor);

    for (const toothPick of toothPicks) {
        toothPick.show(factor);
        minX = min(toothPick.ax, minX);
        maxX = max(toothPick.bx, maxX);
    }

    const next = [];
    for (const toothPick of toothPicks.filter(t => t.newPick)) {
        const nextA = toothPick.createA(toothPicks);
        const nextB = toothPick.createB(toothPicks);
        if (nextA != null) {
            next.push(nextA);
        }
        if (nextB != null) {
            next.push(nextB);
        }
        toothPick.newPick = false;
    }

    toothPicks.push(...next);

    sequence.push(sequence[sequence.length-1] + next.length);
    sequenceP.html(sequence.reduce((a, c) => a += ' ' + c), '');

    if (frameCount > 200) {
        noLoop();
    }
}
