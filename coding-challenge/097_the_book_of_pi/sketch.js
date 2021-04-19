
// https://github.com/zenozeng/p5.js-pdf
// attempt to generate a pdf “Book of Pi” with the first 1 million digits of Pi mapped to color.

let pi;
let pdf;
let canvas;


function preload() {
    pi = loadStrings('pi-1million.txt');
}

function setup() {
    pi = pi[0];
    createButton('Example').mouseClicked(() => pdfExample());
    createButton('Part1').mouseClicked(() => part1());
    createButton('Part2').mouseClicked(() => part2());
}

function pdfExample() {
    canvas = createCanvas(400, 400);
    pdf = createPDF();
    pdf.beginRecord();
    background(255);
    fill('#ED225D');
    textSize(100);
    textAlign(CENTER);
    text(10, width / 2, height / 2);
    pdf.endRecord();
    pdf.save({ filename: 'Example.pdf' });
}

function part1() {
    createCanvas(1000, 1000);
    
    const cols = 100;
    const rows = 100;

    colorMode(HSB, 1.0);
    const w = width / cols;
    const h = height / rows;
    let index = 0;

    const totalPages = pi.length / (cols * rows);
    console.log('total Pages: ' + totalPages);

    pdf = createPDF();
    pdf.beginRecord();

    for (let i = 0; i < totalPages; i++) {
        
        for (let y = 0; y < height; y += h) {
            for (let x = 0; x < width; x += w) {
                const s = pi.charAt(index);
                const digit = int(s);
                fill(digit / 10, 1, 1);
                noStroke();
                rect(x, y, w, h);
                index++;
                if (index >= pi.length) {
                    index = pi.length - 1;
                }
            }
        }
        console.log('page ' + (i+1) + ' complete!' );
        if (i < totalPages - 1) pdf.nextPage();
    }
    console.log('Finished!');
    pdf.endRecord();
    pdf.save({ filename: 'book-of-pi-1million.pdf' });

}

function part2() {

    createCanvas(850, 1150);
    fill(0);
    textSize(12);
    textFont('Courier');
    textAlign(CENTER, CENTER);
    background(255);


    pdf = createPDF();
    pdf.beginRecord();

    const w = textWidth('0');
    const h = 14.4;
    
    const piValue = '3.' + pi;
    const margin = 100;

    let index = 0;
    let pageNum = 0;
    let finished = false;
    while (!finished) {
        for (let y = margin; y < height - margin; y += h) {
            let x = margin;
            while (x < width - margin - w / 2) {
                const s = piValue.charAt(index);
                text(s, x + w / 2, y + h / 2);
                x += w;
                index++;
                if (index >= piValue.length) {
                    finished = true;
                    break;
                }
            }
        }
        pageNum++;
        console.log('page ' + (pageNum+1) + ' complete!' );
        pdf.nextPage();
        background(255);
    }
   
    console.log('Finished!');
    pdf.endRecord();
    pdf.save({ filename: 'book-of-pi-1million-text.pdf' });

}

