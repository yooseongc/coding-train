
/* 
    A Context-Free Grammer text generator.
    reference tracery.js : a story-grammar generation library for javascript
    (https://github.com/galaxykate/tracery)

    sentence(S) : "The N V"
    noun(N) : "cat | dog"
    verb(V) : "meows | barks"

*/

let button;

// https://github.com/aparrish/rwet-examples/blob/master/contextfree/test_grammar.json
const rules = {
    'S': [  // sentence
        ['NP', 'VP'],
        ['Interj', 'NP', 'VP']
    ],
    'NP': [ // 
        ["Det", "N"],
        ["Det", "N", "that", "VP"],
        ["Det", "Adj", "N"]
    ],
    'VP': [
        ["Vtrans", "NP"],
        ["Vintr"]
    ],
    'Interj': [
        ["oh"],
        ["my"],
        ["wow"],
        ["darn"]
    ],
    'Det': [
        ["this"],
        ["that"],
        ["the"]
    ],
    'N': [
        ["amoeba"],
        ["dichotomy"],
        ["seagull"],
        ["trombone"],
        ["overstaffed"],
        ["corsage"]
    ],
    'Adj': [    // adjective
        ["bald"],
        ["smug"],
        ["important"],
        ["tame"],
        ["overstaffed"],
        ["corsage"]
    ],
    'Vtrans': [
        ["computes"],
        ["examines"],
        ["foregrounds"]
    ],
    'Vintr': [
        ["coughs"],
        ["daydreams"],
        ["whines"]
    ]
}

function setup() {
    noCanvas();
    button = createButton('generate');
    button.mousePressed(contextFreeGrammer);
}

function contextFreeGrammer() {
    const start = 'S';
    const expansion = [];
    const result = expand(start, expansion);
    createP(result);
}

function expand(start, expansion) {
    if (rules[start]) {
        const pick = random(rules[start]);
        for (const p of pick) {
            expand(p, expansion); // recursively.
        }
    } else {
        expansion.push(start);
    }
    return expansion.join(' ');
}
