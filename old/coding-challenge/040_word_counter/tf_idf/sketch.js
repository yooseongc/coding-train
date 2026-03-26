
// https://en.wikipedia.org/wiki/Tf%E2%80%93idf
// https://ko.wikipedia.org/wiki/Tf-idf

/*
    Implement an algorithm known as TF-IDF (Term Frequency - Inverse Document Frequency).
    The algorithm scores each word's relevance for a given document 
      based on its frequency in one document relative to all others in a corpus.
    This is one possible methods for keyword generation.

    * 정보 검색과 텍스트 마이닝에서 이용하는 가중치.
    * 여러 문서로 이루어진 문서군이 있을 때 어떤 단어가 특정 문서 내에서 얼마나 중요한 것인지를 
      나타내는 통계적 수치.
    * 문서의 핵심어를 추출하거나, 검색 엔진에서 검색 결과의 순위를 결정하거나, 문서들 사이의 
      비슷한 정도를 구하는 등의 용도로 사용 가능함.

    * TF(단어 빈도; term frequency)는 특정 단어가 한 문서 내에 등장하는 빈도 수로,
      이 값이 클 수록 해당 단어는 그 문서에서 중요하다고 생각될 수 있음.
    * 그러나, 전체 문서군 내에서 자주 사용되는 경우에는 그 단어는 전반적으로 흔하게 등장하는
      단어라는 것을 의미하며 이를 DF(문서 빈도, document frequency)라고 함.
    * DF의 역수 값을 IDF(역문서 빈도, inverse document frequency)라고 함.
    * TF-IDF는 TF와 IDF를 곱한 값으로, 문서군에서 해당 단어의 중요도를 나타냄.
    * 
    * 가령 '원자' 라는 단어는 일반 문서 사이에서는 잘 나오지 않기 때문에 IDF값이 높은 반면,
      원자에 대한 문서를 모아놓은 문서군 사이에서는 '원자'가 상투어가 되어 
      오히려 다른 단어들이 각 문서를 구분하는 핵심어가 될 가능성이 높아지므로 높은 가중치를 얻음.
    
    여기서는 TF로 raw count를, 
    IDF로 inverse document frequency (log N / (n_t + 1)) 를 사용함.
    
*/

const txt = [];
const counter = {};
const keys = [];
const allWords = [];

const files = ['rainbow.txt', 'sports.txt', 'eclipse.txt', 'fish.txt'];

function preload() {
    files.map(filename => loadStrings('files/' + filename)).forEach(t => txt.push(t));
}

function setup() {
    noCanvas();
    
    // all words
    txt.forEach(t => allWords.push(t.join('\n')));

    // choose rainbow.txt and calculate TF
    allWords.shift().split(/\W+/)
    .map(s => s.toLowerCase())
    .forEach(word => {
        if (counter[word]) {
            counter[word].tf += 1;
        } else {
            counter[word] = { tf: 1, df: 1 }; 
            keys.push(word);
        }
    });

    // others
    // term 이 document에 한 번이라도 들어있는지 체크.
    const otherCounters = [];
    allWords.forEach(t => {
        const tempCounter = {};
        t.split(/\W+/).map(s => s.toLowerCase())
        .forEach(w => { tempCounter[w] = true; });
        otherCounters.push(tempCounter);
    });

    // 해당 문서의 키워드가 다른 문서에 있다면 df 값을 1 증가시킴.
    keys.forEach(key => {
        for (const otherCounter of otherCounters) {
            if (otherCounter[key]) {
                counter[key].df += 1;
            }
        }
    });

    // TF-IDF 계산
    // tf(t, D) => raw count
    // idf(t, D) = log( (total number of documents) / (the number of documents containing the term + 1) )
    keys.forEach(key => {
        counter[key].tfidf = counter[key].tf * log(files.length / counter[key].df); 
    });

    keys.sort((a, b) => counter[b].tfidf - counter[a].tfidf).forEach(key => {
        createDiv(key + ' ' + counter[key].tfidf);
    });
    
}
