
let textField;
let output;
let submit;

/*
    If separator is a regular expression that contains capturing parentheses, 
    then each time separator is matched the results 
    (including any undefined results) of the capturing parentheses are spliced 
    into the output array.
*/


function highlight() {
    this.html('rainbow');
    const c = color(random(255), random(255), random(255));
    this.style('background-color', c);
}

function newText() {
    const s = textField.value();
    const words = s.split(/(\W+)/);  // any non-word charactor
    for (const word of words) {
        const span = createSpan(word);
        span.parent(output);
        if (!/\W+/.test(word)) {
            span.mouseOver(highlight);
        }
    }
    
}

function setup() {
    noCanvas();
    textField = select('#input');
    output = select('#output');
    submit = select('#submit');
    submit.mousePressed(newText);
}
