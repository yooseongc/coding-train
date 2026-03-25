
// https://github.com/jsoma/tabletop
// https://en.wikipedia.org/wiki/Mad_Libs
// google forms - https://docs.google.com/forms/d/e/1FAIpQLSdH1USgIbyHWPZFrGrIbpk7T6v1GcKbP2EwValvf97S-Spb5w/viewform?c=0&w=1
// google sheet - https://docs.google.com/spreadsheets/d/15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs/pubhtml

/*
    Mad Libs web application using p5.js and tabletop.js
    tabletop.js -> javascript library for connecting to google sheet data.

    Mad Libs is a pharasal template word game
      which consists of one player prompting others for a list of words
      to substitute for blanks in a story before reading aloud.
    The game is frequently played as a party game or as a pastime.  
*/

let data;
const txt = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';


function setup() {
    noCanvas();
    Tabletop.init({
        key: '15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs',
        callback: (stuff, tabletop) => { data = stuff; },
        simpleSheet: true
    });
    const button = createButton('generate madlib');
    button.mousePressed(() => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        const madlib = txt.replace(/\$\$(.*?)\$\$/g, (match, p1) => {
            const entry = random(data);
            console.log(entry, match, p1);
            return entry[p1];
        });
        createP(madlib);
    });
}
