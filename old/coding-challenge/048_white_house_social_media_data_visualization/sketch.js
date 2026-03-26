
// Obamathon
// https://github.com/ITPNYU/Obamathon
// https://obamawhitehouse.archives.gov/blog/2017/01/05/new-lenses-first-social-media-presidency

/* 
    How to use the White House social media data 
        to make simple data visualization example with p5.js.
*/


let data;
const counts = {};

const ignore = {
    "the": 'true',
    "to": 'true',
    "we": 'true',
    "of": 'true',
    "and": 'true',
    "a": 'true',
    "http": 'true',
    "https": 'true',
    "our": 'true'
};

function preload() {
    data = loadJSON('flotus.json');
}

function setup() {
    createCanvas(600, 400);
    const tweets = data.tweets;
    for (const tweet of tweets) {
        const date = new Date(tweet.timestamp);
        const month = date.getMonth() + 1;
        const year  = date.getFullYear();
        const key   = `${month}/${year}`;

        if (counts.hasOwnProperty(key)) {
            counts[key].total++;
        } else {
            counts[key] = { total: 1, words: {} };
        }

        const words = tweet.text
            .split(/\W+/)
            .filter(w => w.length > 0)
            .map(w => w.toLowerCase());
        
        for (const word of words) {
            if (counts[key].words.hasOwnProperty(word)) {
                counts[key].words[word]++;
            } else {
                counts[key].words[word] = 1;
            }
        }
    }

    background(0);

    const keys = Object.keys(counts);
    keys.reverse();
    const maxTweets = Math.max(...keys.map(key => counts[key].total));
    const w = width / keys.length;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const num = counts[key].total;
        const h = map(num, 0, maxTweets, 0, 300);
        fill(200);
        rect(1 + i * w, height - h, w - 1, h);

        // find the word with the largest counts
        const wc = counts[key].words;
        let maxCount = 0;
        let maxWord = '';
        for (const word in wc) {
            if (wc[word] > maxCount && !ignore[word] && word.length > 3) {
                maxCount = wc[word];
                maxWord = word;
            }
        }
        fill(255);
        text(maxWord, i * w, height - h - 5);
    }
}
