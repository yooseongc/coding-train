
// https://en.wikipedia.org/wiki/Acrostic
// https://ko.wikipedia.org/wiki/%EC%9D%B4%ED%95%A9%EC%B2%B4%EC%8B%9C
// https://www.datamuse.com/api/

/*
    Create an acrostic generator with Wordnik API and p5.js
    Wordnik v4 words API를 사용할 수 없어서 datamuse api로 변경.

    Acrostic : 이합체시, 시 형식의 한 종류로, 각 구의 첫글자를 조합해 다른 뜻의 말이
               나타나는 것을 말함. (세로드립)
*/

function getSearchDatamuseAPIUrl(term) {
    return `https://api.datamuse.com/words?sp=${term}*`;
}

function setup() {
    noCanvas();
    const button = select('#submitbutton');
    const input = select('#wordinput');

    const pickWord = (div, letter) => {
        loadJSON(getSearchDatamuseAPIUrl(letter), data => {
            const selection = random(data);
            div.html(selection.word);
        });
    };
    const makeAcrostic = () => {
        const word = input.value();
        for (let i = 0; i < word.length; i++) {
            const letter = word.charAt(i);
            const div = createDiv('');
            pickWord(div, letter);
        }
    };

    button.mousePressed(makeAcrostic);
}
