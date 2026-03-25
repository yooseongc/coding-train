

// https://en.wikipedia.org/wiki/Markov_chain
// https://setosa.io/ev/markov-chains/
// https://ko.wikipedia.org/wiki/%EB%A7%88%EB%A5%B4%EC%BD%94%ED%94%84_%EC%97%B0%EC%87%84
// https://ko.wikipedia.org/wiki/%EB%A7%88%EB%A5%B4%EC%BD%94%ED%94%84_%ED%99%95%EB%A5%A0_%EA%B3%BC%EC%A0%95
// https://en.wikipedia.org/wiki/Markov_property

/*
    Part 1.

     - the concepts of 'N-grams' and 'Markov Chains' as they related to text.
     - Use Markov chains to generate text automatically based on a source text.

    Part 2.

     - Use Markov Chain to generate a new name for Coding Train YouTube Channel.
     - The code reads from a list of name suggestions submitted by viewers.  
*/

/*
    - 마르코프 연쇄(Markov Chain)
        * 확률론에서, 마르코프 연쇄는 마르코프 성질을 만족시키는 이산 시간 확률 과정.
        * 시간에 따른 시스템의 상태의 변화를 나타냄. 
        * 매 시간마다 시스템은 상태를 바꾸거나(전이) 같은 상태를 유지함.
        * 마르코프 성질은 과거와 현재 상태가 주어졌을 때의
          미래 상태의 조건부 확률 분포가 과거 상태와는 독립적으로 
          현재 상태에 의해서만 결정된다는 것을 뜻함.

    - 마르코프 확률 과정 (Markov stochastic process)
        * 현재에 대한 조건부로 과거와 미래가 서로 독립인 확률 과정.
        * 즉, 마르코프 확률 과정은 '기억하지 않는' 확률 과정.
        * 이 과정에서 미래를 유추할 때 현재 값을 제외한 과거 값들은 아무 추가 정보도 제공하지 못함.
        

    - Markov property
        * the term Markov property refers to the memoryless property of a stochastic process.
        * It is named after the Russian mathematician Andrey Markov
        * The term strong Markov property is similar to the Markov property, 
            except that the meaning of "present" is defined 
            in terms of a random variable known as a stopping time.
        * The term Markov assumption is used to describe a model where the Markov property is assumed to hold,
             such as a hidden Markov model.
        * A discrete-time stochastic process satisfying the Markov property is known as a Markov chain.
        * Brownian motion has the Markov property,
            as the displacement of the particle does not depend on its past displacements.

    - n-gram
        * In the fields of computational linguistics and probability,
            an n-gram is a contiguous sequence of n items from a given sample of text or speech.
        * The n-grams typically are collected from a text or speech corpus.
        * When the items are words, n-grams may also be called shingles.
        * Using Latin numerical prefixes, an n-gram of size 1 is referred to as a "unigram"; 
            size 2 is a "bigram" (or, less commonly, a "digram"); size 3 is a "trigram".
        * In computational biology, a polymer or oligomer of a known size is called a k-mer instead of an n-gram
            with specific names using Greek numerical prefixes such as "monomer", "dimer", "trimer", "tetramer", "pentamer", etc.
        * An n-gram model is a type of probabilistic language model for predicting the next item 
            in such a sequence in the form of a (n − 1)–order Markov model.
        * n-gram models are now widely used in probability, communication theory, computational linguistics
            computational biology (for instance, biological sequence analysis), and data compression.
        *  Two benefits of n-gram models (and algorithms that use them) are 
            simplicity and scalability – with larger n, a model can store more context 
            with a well-understood space–time tradeoff, enabling small experiments to scale up efficiently.
        * Examples: 

 */


let unicorn;
let names;

const order = 3;



function preload() {
    loadStrings('unicorn.txt', (arr) => { unicorn = arr[0]; });
    names   = loadStrings('names.txt');
}

function setup() {
    noCanvas();
    markov1(unicorn);
    markov2(names);
}

function markov1(text) {
    const ngrams = {};
    for (let i = 0; i <= text.length - order; i++) {
        const gram = text.substring(i, i + order);
        if (!ngrams[gram]) {
            ngrams[gram] = [];
        }
        ngrams[gram].push(text.charAt(i + order)); // what character should be next?
    }
    const resDiv = select('#mk1res');
    const btn = select('#mk1btn');
    btn.mousePressed(() => {
        let currentGram = text.substring(0, order);
        let result = currentGram;
        for (let i = 0; i < 100; i++) {
            const possibilities = ngrams[currentGram];
            if (!possibilities) break;
            const next = random(possibilities);  // choose next characters by random selection
            result += next;
            const len = result.length;
            currentGram = result.substring(len - order, len);
        }
        const p = createP(result);
        p.parent(resDiv);
    });
}

function markov2(texts) {
    const ngrams = {};
    const beginnings = [];
    for (const text of texts) {
        for (let i = 0; i <= text.length - order; i++) {
            const gram = text.substring(i, i + order);
            if (i === 0) {
                beginnings.push(gram);
            }
            if (!ngrams[gram]) {
                ngrams[gram] = [];
            }
            ngrams[gram].push(text.charAt(i + order));
        }
    }
    const resDiv = select('#mk2res');
    const btn = select('#mk2btn');
    btn.mousePressed(() => {
        let currentGram = random(beginnings);
        let result = currentGram;
        for (let i = 0; i < 20; i++) {
            const possibilities = ngrams[currentGram];
            if (!possibilities) break;
            const next = random(possibilities);  // choose next characters by random selection
            result += next;
            const len = result.length;
            currentGram = result.substring(len - order, len);
        }
        const p = createP(result);
        p.parent(resDiv);
    });
}
