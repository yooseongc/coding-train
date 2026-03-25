

/*

    Thesis : Sentiment Analysis with the AFINN-111 word list. 
    Part1 : convert tsv -> json
    Part2 : analyzes the valence (positive vs negative) of text 
        as a user types into a text area.

    valence : 유의성(誘意性) > 공감, 정서

    AFINN : http://www2.imm.dtu.dk/pubdb/pubs/6010-full.html

    AFINN is a list of English words rated for valence with an integer 
        between minus five (negative) and plus five (positive).
    The words have been manually labeled by Finn Arup Nielsen in 2009-2011.
    AFINN-111 : 2477 words and phrases.

    Sentiment Analysis(감성 분석) = opinion mining or emotion AI
    https://en.wikipedia.org/wiki/Sentiment_analysis

    Sentimental Analysis is the use of natural language processing,
        text analysis, computational linguistics, and biometrics 
        to systematically identify, extract, quantify, and study affective states
        and subjective information.
    It is widely applied to voice of the customer materials such as
        reviews and survey responses, online and social media, and 
        healthcare materials for applications that range from marketing to customer service
        to clinical medicine.

    
*/

let afinn;

function preload() {
    afinn = loadJSON('afinn111.json');
}

function setup() {
    noCanvas();

    const txt = select('#txt');
    txt.input(() => {
        const textInput = txt.value();
        // \W matches any non-word character (equivalent to [^a-zA-Z0-9_])
        const words = textInput.split(/\W/);
        const scoredWords = [];
        let totalScore = 0;
        for (let word of words) {
            word = word.toLowerCase();
            if (afinn.hasOwnProperty(word)) {
                const score = Number(afinn[word]);
                totalScore += score;
                scoredWords.push(`${word}: ${score} `);
            }
        }
        const scoreP = select('#scoreP');
        const compaP = select('#comparativeP');
        const wordList = select('#wordlistP');
        scoreP.html(`score: ${totalScore}`);
        compaP.html(`comparative: ${totalScore / words.length}`);
        wordList.html(scoredWords);
    });
}
