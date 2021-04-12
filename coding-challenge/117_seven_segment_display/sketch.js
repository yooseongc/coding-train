
// https://en.wikipedia.org/wiki/Seven-segment_display

// A seven-segment display is a form of electronic display device for displaying decimal numerals 
//   that is an alternative to the more complex dot matrix displays.
// Seven is the minimum numbers of segments required to show every number using straight lines.

// Four binary bits are needed to specify the numbers 0-9, 
// but can also specify 10-15, so usually decoders with 4bit inputs can also display Hexadecimal digits.

/* 

   ---- <- A
F |    | B 
   ---- <- G
E |    | C
   ---- <- D

     A   B   C   D   E   F   G             HEX
--------------------------------
0    1   1   1   1   1   1   0             0x7e
--------------------------------
1    0   1   1   0   0   0   0             0x30
--------------------------------
2    1   1   0   1   1   0   1             0x6d
--------------------------------
3    1   1   1   1   0   0   1             0x79
--------------------------------
4    0   1   1   0   0   1   1             0x33
--------------------------------
5    1   0   1   1   0   1   1             0x5b
--------------------------------
6    1   0   1   1   1   1   1             0x5f
--------------------------------
7    1   1   1   0   0   0   0             0x70
--------------------------------
8    1   1   1   1   1   1   1             0x7f
--------------------------------
9    1   1   1   1   0   1   1             0x7b
--------------------------------

*/

//      index    0     1     2     3     4     5     6     7     8     9
const nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
let num = 0;

function setup() {
    createCanvas(400, 400);
    frameRate(3);
}

function getColor(value, shift) {
    // check: for each segment, is a bit of the value is 1 or 0.
    // if 1, turn on (bright red), else turn off (dark red). 
    const alpha = 40 + 255 * ((value >> shift) & 1);
    return color(255, 0, 0, alpha);
}

function drawDigit(value, offset) {
    push();
    noStroke();
    translate(offset || 0, 0);
    noFill();
    // A
    fill(getColor(value, 6));
    rect(60, 20, 78, 18, 10, 10);
    // B
    fill(getColor(value, 5));
    rect(140, 40, 18, 98, 10, 10);
    // C
    fill(getColor(value, 4));
    rect(140, 160, 18, 98, 10, 10);
    // D
    fill(getColor(value, 3));
    rect(60, 260, 78, 18, 10, 10);
    // E
    fill(getColor(value, 2));
    rect(40, 160, 18, 98, 10, 10);
    // F
    fill(getColor(value, 1));
    rect(40, 40, 18, 98, 10, 10);
    // A
    fill(getColor(value, 0));
    rect(60, 140, 78, 18, 10, 10);
    pop();
}

function draw() {
    background(0);
    const firstDigit  = floor(num / 10);
    const secondDigit = num % 10;
    drawDigit(firstDigit === 0 ? 0 : nums[firstDigit]);
    drawDigit(nums[secondDigit], 150);

    num = (num + 1) % 100;  // 00 ~ 99
}
