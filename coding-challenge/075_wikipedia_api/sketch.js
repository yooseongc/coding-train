
// https://www.mediawiki.org/wiki/API:Main_page

/*
    Make a "Wikipedia web crawler" in JavaScript. 
    It randomly crawls from topic to topic on Wikipedia 
      using the API and the p5.js library. 
*/

let counter = 0;

function getSearchUrl(keyword) {
    return `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${keyword}`
}

function getContentUrl(title) {
    return `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${title}`
}

function gotSearch(data) {
    const len = data[1].length;
    const idx = floor(random(len));
    let title = data[1][idx];
    title = title.replace(/\s+/g, '_');
    createDiv(title);
    console.log('Querying: ' + title);
    loadJSON(getContentUrl(title), gotContent, 'jsonp');
}

function gotContent(data) {
    const page = data.query.pages;
    const pageId = Object.keys(page)[0];
    const content = page[pageId].revisions[0]['*'];
    const words = content.match(/\b\w{4,}\b/g);
    const word = random(words);
    goWiki(word);
}

function goWiki(keyword) {
    counter = counter + 1;
    if (counter < 10) {
        loadJSON(getSearchUrl(keyword), gotSearch, 'jsonp');
    }
}

function setup() {
    noCanvas();
    const userInput = select('#userinput');
    // const searchBtn = select('#search');
    
    userInput.changed(() => {
        // start searching
        counter = 0;
        goWiki(userInput.value());
    });
}

