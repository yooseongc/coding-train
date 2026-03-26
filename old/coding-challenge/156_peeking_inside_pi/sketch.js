
// http://pi.fathom.info/
// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm

/*
    Boyer-Moore string-search algorithm

    In computer science, the 'Boyer-Moore string search algorithm' is an efficient
        string-search algorithm that is the standard benchmark for practical 
        string-search literature.
    It was developed by Robert S. Boyer and J Strother Moore in 1977.
    The original paper contained static tables for computing pattern shifts
        without an explanation of how to produce them.
    The algorithm for producing the tables was published in a follow-on paper;
        this paper contained errors which were later corrected by Wojciech Rytter
        in 1980.
    The algorithm preprocesses the string being searched for (the pattern),
        but not the string being searched in (the text).
    It is thus well-suited for applications in which the pattern is much shorter than
        the text or where it persists across multiple searches.

    The Boyer-Moore algorithm uses information gathered during the preprocess step
        to skip sections of the text, resulting in a lower constant factor than
        many other string search algorithms.
    
    In general, the algorithm runs faster as the pattern length increases.
    The key features of the algorithm are to match on the tail of the pattern
        rather than the head, and to skip along the text in jumps of multiple 
        characters rather than searching every single character in the text.
*/

let raw;
let digits;
let searchBox;
let indexP;

function preload() {
    raw = loadStrings('pi-million.txt');
}

function setup() {
    noCanvas();
    digits = raw[0];

    createP('Find keyword in 1 million digits of PI!').style('font-size', '2rem');
    searchBox = createInput('');
    searchBox.input(searchItUp);

    indexP = createP('please put the search digits.');
}

function searchItUp() {
    const search = searchBox.value();
    if (search.length === 0) {
        indexP.html('please put the search digits.');
        return;
    }
    const idx = indexOf(digits, search, 2);
    if (idx > 0) {
        indexP.html(`found: ${idx - 1}`);
    } else {
        indexP.html('not found in the first 1 million digits of PI.');
    }
    
}

function indexOf(txt, search, startIdx = 0) {
    const start = search.charAt(0);
    for (let i = startIdx; i < txt.length; i++) {
        if (txt.charAt(i) === start) {
            let found = true;
            for (let j = 1; j < search.length; j++) {
                if (txt.charAt(i + j) !== search.charAt(j)) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
    }
    return -1;
}

