
// make a 'Diastic' machine
// https://en.wikipedia.org/wiki/Jackson_Mac_Low
// https://ko.wikipedia.org/wiki/%EC%9D%B4%ED%95%A9%EC%B2%B4%EC%8B%9C
// https://shiffman.github.io/A2Z-F17/week1-strings/12_diastic/

/*
    Diastic technique is a methodology and algorithm 
      for generating found poetry from a source text.
    It was developed and used by poet / artist Jackson Mac Low.

    Acrostic(이합체시)
    시의 형식의 한 종류로, 각 구의 첫글자를 조합하면 다른 뜻의 말이 나타나는 것을 말한다. 
    이명으로는 세로드립이 있으나, 표준어가 아니다.

    Jackson Mac Low => 
    One type of non-intentional composition that he used 
      relied on an algorithm he dubbed "diastic", by analogy to acrostic.
    He used words or phrases drawn from source material spell out a source word or phrase,
      with the first word having the 'first letter' of the source,
      the second word having the 'second letter', and so forth, 
      reading through (dia in Greek) the source.

    Example : "Insect Assassins"
    Injects no survive. Efforts control the
    Animal survive. Survive. Animal survive. Survive. Injects no survive.
    
*/

let sourceText;
let words;

function preload() {
    sourceText = loadStrings('rainbow.txt');
}

function diastic(seed, words) {
    let phrase = '';
    let currentWord = 0;
    seed = seed.split('').filter(c => c !== ' ').join('').toLowerCase();
    console.log(seed);
    for (let i = 0; i < seed.length; i++) {
        const c = seed.charAt(i);
        for (let j = currentWord; j < words.length; j++) {
            if (words[j].toLowerCase().charAt(i) === c) {
                phrase += words[j];
                phrase += ' ';
                currentWord = j + 1;
                break;
            }
        }
    }
    return phrase;
}

function setup() {
    noCanvas();
    sourceText = join(sourceText, ' ');
    words = splitTokens(sourceText, ' ,!.?"\'');

    const seed = select('#seed');
    const submit = select('#submit');
    submit.mousePressed(() => {
        const phrase = diastic(seed.value(), words);
        createP(phrase);
    });


}
