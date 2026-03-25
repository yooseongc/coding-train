

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    
    
    
    const hr = hour();
    const mn = minute();
    const sc = second();
    
    const sca = map(sc, 0, 60, 0, 360);
    const mna = map(mn, 0, 60, 0, 360);
    const hra = map(hr % 12, 0, 12, 0, 360);
    
    
    
    // if you want digital text clock, 
    fill(255);
    noStroke();
    textSize(32);
    text(`${nf(hr, 2)}:${nf(mn, 2)}:${nf(sc, 2)}`, 20, 40);
    

    translate(200, 200);
    rotate(-90);


    // if you want belt clock(?)
    noFill();
    strokeWeight(8);
    stroke(255, 100, 150);
    arc(0, 0, 300, 300, 0, sca); // second
    
    stroke(150, 100, 255);
    arc(0, 0, 280, 280, 0, mna); // minute
    
    stroke(150, 255, 100);
    arc(0, 0, 260, 260, 0, hra); // hour
    
    // if you want bar clock
    strokeWeight(8);
    push();
    rotate(sca);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();
    
    push();
    rotate(mna);
    stroke(150, 100, 255);
    line(0, 0, 75, 0);
    pop();
    
    push();
    rotate(hra);
    stroke(150, 255, 100);
    line(0, 0, 50, 0);
    pop();
    
    stroke(255);
    strokeWeight(2);
    point(0, 0);
    for (let i = 0; i < 360; i=i+6) {
        point(120 * cos(i), 120 * sin(i));
    }
}
