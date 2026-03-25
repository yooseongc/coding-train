


function setup() {
    noCanvas();
    
    const bgpage = chrome.extension.getBackgroundPage();
    const word = bgpage.word.trim();
    
    let url = `https://api.wordnik.com/v4/word.json/
    ${word}
    /definitions?limit=1
    &includeRelated=false
    &sourceDictionaries=all
    &useCanonical=false
    &includeTags=false
    &api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
    `;
    url = url.replace(/\s+/g, '');
    loadJSON(url, gotData);
    
    function gotData(data) {
        createP(data[0].text).style('font-size', '48pt');
    }
}

