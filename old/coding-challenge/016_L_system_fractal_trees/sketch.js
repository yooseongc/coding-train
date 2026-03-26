
// https://en.wikipedia.org/wiki/L-system
// https://en.wikipedia.org/wiki/Barnsley_fern

/*
    L-system (Lindenmayer System)

    A parallel rewriting system and a type of formal grammer.
    It consists of an alphabet of symbols that can be used
     to make strings, a collection of production rules that
     expand each symbol into some larger string of symbols,
     an initial "axiom" string from which to begin construction,
     and a mechanism for translating the generated strings into
     geometric structures.
    L-systems were introduced and developed in 1968 by
     Aristid Lindenmayer, a Hungarian theoretical biologist and
      botanist at the Universy of Utrecht.
    Lindenmayer used L-systems to describe the behaviour of plant cells
     and to model the growth processes of plant dvelopment.
    L-systems have also been used to model the morphology of a variety 
     of organisms and can be used to generate self-similar fractals. 
    
    L-systems is defined as a tuple
     G = (V, omega, P)
     where
     V: a set of symbols containing both elements that can be replaced
      (variables) and those which cannot be replaced ("constants" or "terminals").
     omega(axiom) : a string of symbols from V defining the initial state of the system.
     P : a set of productin rules or productions defining the way variables can 
      be replaced with combinations of constants and other variables.
      A production consists of two strings, the predecessor and the successor.
      For any symbol A which is a member of the set V which does not appear
       on the left hand side of a production P, the identity production A->A 
       is assumed; these symbols are called constants and terminals.
       
    EX 1) Algae
     - variables: A B
     - constants: none
     - axiom: A
     - rules: (A->AB), (B->A)

     n=0, A
     n=1, AB
     n=2, ABA (A -> AB, B -> A)
     n=3, ABAAB (A -> AB, B -> A, A -> AB)
     n=4, ABAABABA
     ...

    EX 2) Fractal(binary) tree
     - variable: 0, 1
     - constants: [, ]
     - axiom: 0
     - rules: (1->11), (0->1[0]0)

     n=0, 0
     n=1, 1[0]0
     n=2, 11[1[0]0]1[0]0
     n=3, 1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0
     ...

     0 - draw a line segment ending in a leaf
     1 - draw a line segment
     [ - push position and angle, turn left 45 degrees
     ] - pop  position and angle, turn right 45 degrees

    EX 3) Fractal plant (Barnsley fern)
     - variable: X, F
     - constants: +, -, [, ]
     - axiom: X
     - rules: (X → F+[[X]-X]-F[-FX]+X), (F → FF)
     - angle: 25 degrees

    F : draw forward
    + : turn left 25 deg
    - : trun right 25 deg
    X : do nothing, used to control the evolution of curves
    [ : push
    ] : pop

*/

let angle;
const axiom = 'F';
const rules = {
    a: 'F',
    b: 'FF+[+F-F-F]-[-F+F+F]'
};  // a -> b
let sentence = axiom;
let len = 100;

function turtle() {
    background(51);
    resetMatrix();
    translate(width / 2, height); // start at middle bottom
    stroke(255, 100);
    for (const c of sentence.split('')) {
        if (c === 'F') {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (c === '+') {
            rotate(angle);
        } else if (c === '-') {
            rotate(-angle);
        } else if (c === '[') {
            push();
        } else if (c === ']') {
            pop();
        }
    }
}

function generate() {
    len *= 0.5;
    let nextSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        const curr = sentence.charAt(i);
        if (curr === rules.a) {
            nextSentence += rules.b;
        } else {
            nextSentence += curr;
        }
    }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}

function setup() {
    createCanvas(400, 400);
    angle = radians(25);
    background(51);
    createP(axiom);
    turtle();
    createButton('generate').mousePressed(generate);
}

