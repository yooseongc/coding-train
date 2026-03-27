import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '040_word_counter',
    number: 40,
    title: 'Word Counter',
    categoryId: 'text-nlp',
    description: '텍스트 파일의 단어 빈도를 세어 빈도순으로 정렬하는 용어 색인(concordance)을 구현합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #40: Word Counter', url: 'https://thecodingtrain.com/challenges/40-word-counter' },
        { title: 'Wikipedia: Concordance (출판)', url: 'https://en.wikipedia.org/wiki/Concordance_(publishing)' },
        { title: 'Wikipedia: Tf-idf (단어 빈도-역문서 빈도)', url: 'https://en.wikipedia.org/wiki/Tf%E2%80%93idf' },
        { title: 'MDN: Array.prototype.reduce()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce' },
    ],
    tags: ['word', 'counter', 'frequency', 'text'],
    difficulty: 'beginner',
    explanation: [
        '용어 색인(concordance)은 텍스트에서 각 단어의 출현 빈도를 세는 기본적인 텍스트 분석 기법입니다. loadStrings()로 rainbow.txt를 줄 단위 배열로 불러온 뒤 join("\\n")으로 하나의 문자열로 합치고, 정규표현식 /\\W+/로 비단어 문자를 기준으로 split하여 토큰 배열을 만듭니다.',
        'map()으로 소문자 변환 후 reduce()로 객체에 단어별 카운트를 누적합니다. reduce()는 배열을 단일 값(여기서는 빈도 객체)으로 축약하는 함수형 프로그래밍 패턴입니다. /\\d+/ 패턴으로 숫자만으로 구성된 토큰은 제외하여 의미 있는 단어만 집계합니다.',
        'Object.keys()로 단어 키 배열을 추출한 뒤 sort()에서 counter[b] - counter[a]로 빈도 내림차순 정렬합니다. 이 비교 함수는 JavaScript 정렬의 핵심 패턴으로, 양수/음수/0 반환값으로 순서를 결정합니다.',
        '단어 빈도 분석은 자연어 처리(NLP)의 가장 기초적인 단계입니다. 이를 확장하면 TF-IDF(단어 빈도-역문서 빈도) 가중치, 불용어(stopword) 제거, 워드 클라우드 시각화 등으로 발전할 수 있습니다. 검색 엔진, 문서 분류, 감성 분석 등 현대 텍스트 마이닝의 기반이 되는 개념입니다.',
    ],
})
