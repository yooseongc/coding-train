
/*  
Build a word counting (concordance; 용어 색인) web application in javascript.

*/

let txt;


function preload() {
    txt = loadStrings('rainbow.txt');
}

function createWordCounter(txt) {
    return txt.join('\n')
    .split(/\W+/)
    .map(token => token.toLowerCase())
    .reduce((counter, word) => {
        if (!/\d+/.test(word)) { // without numbers
            if (counter[word]) {
                counter[word] += 1;
            } else {
                counter[word] = 1;
            }
        }
        return counter;
    }, {});
}

function setup() {
    noCanvas();
    const counter = createWordCounter(txt);
    Object.keys(counter).sort((a, b) => counter[b] - counter[a]).forEach(key => {
        createDiv(key + ' ' + counter[key]);
    });
}

