import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '075_wikipedia_api',
    number: 75,
    title: 'Wikipedia API',
    categoryId: 'data-visualization',
    description: 'Wikipedia API를 사용하여 주제에서 주제로 랜덤 크롤링하는 위키피디아 웹 크롤러를 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    bodyHtml: '<h3>Wikipedia Crawler</h3><p>word: <input id="userinput" value="rainbow" /></p>',
    references: [
        { title: 'Coding Challenge #75: Wikipedia API', url: 'https://thecodingtrain.com/challenges/75-wikipedia-api' },
    ],
    tags: ['wikipedia', 'API', 'fetch', 'DOM'],
    difficulty: 'intermediate',
    explanation: [
        'MediaWiki API의 opensearch와 query 엔드포인트를 사용합니다. opensearch로 키워드 검색 결과를 가져오고, query로 문서 본문 내용을 가져옵니다. loadJSON()의 JSONP 모드로 크로스도메인 요청을 처리합니다.',
        'gotSearch()에서 검색 결과 중 랜덤으로 하나를 선택하고, gotContent()에서 해당 문서의 본문에서 4글자 이상 단어를 정규식(\\b\\w{4,}\\b)으로 추출하여 다음 검색 키워드로 사용합니다.',
        'goWiki()는 재귀적으로 호출되며 counter로 최대 10회까지 크롤링을 제한합니다. 각 단계에서 createDiv()로 방문한 문서 제목을 화면에 표시합니다. noCanvas()로 캔버스 없이 DOM만 사용합니다.',
    ],
})
