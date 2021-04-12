
// https://10print.org/
// https://medium.com/@alessandravertrees/10-print-chr-205-5-rnd-1-goto-10-bf21acd329ab
// https://www.c64-wiki.com/wiki/PETSCII
// https://c64emulator.111mb.de/index.php?site=pp_javascript&group=c64

/*
    10 PRINT is a book about 
      a one-line Commodore 64 BASIC program, published in November 2012.

    10 PRINT CHR$(205.5+RND(1)); : GOTO 10

    * CHR is short for 'character'.
    * CHR$ is a function that 'takes a numeric code and returns the corresponding character,
        which may be a digit, a letter, a punctuation mark, a space, or a character graphics'.
    * Commodore 64 had its own character set called PETSCII
    * RND(1) returns a pseudorandom number (float) between 0 and 1.
    * If RND(1) is >= 0.5 and < 1.0, 205.5+RND(1) will be truncated as 206.
    * If RND(1) is >= 0.0 and < 0.5, 205.5+RND(1) will be truncated as 205.
    * PETSCII -> codes 192-223 as codes 96-127
    * CHR$(206) = CHR$(110) = '\'
    * CHR$(205) = CHR$(109) = '/'
*/

let x = 0;
let y = 0;
const spacing = 20;

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    stroke(255);
    if (random(1) < 0.5) {
        line(x, y, x + spacing, y + spacing);  //  \ line 
    } else {
        line(x, y + spacing, x + spacing, y);  //  / line
    }
    x = x + spacing;
    if (x > width) {
        x = 0;
        y = y + spacing;
    }

    if (y >= height) {
        noLoop();
    }
}
