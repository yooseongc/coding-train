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
        { title: 'MediaWiki API - Main Page', url: 'https://www.mediawiki.org/wiki/API:Main_page' },
        { title: 'Wikipedia - Web crawler', url: 'https://en.wikipedia.org/wiki/Web_crawler' },
        { title: 'p5.js Reference - loadJSON()', url: 'https://p5js.org/reference/p5/loadJSON/' },
    ],
    tags: ['wikipedia', 'API', 'fetch', 'DOM'],
    difficulty: 'intermediate',
    explanation: [
        '위키피디아(Wikipedia)는 MediaWiki 소프트웨어 위에 구축되어 있으며, MediaWiki API를 통해 프로그래밍 방식으로 문서를 검색, 조회, 편집할 수 있습니다. 이 챌린지에서는 opensearch 엔드포인트로 키워드 검색 결과를 가져오고, query 엔드포인트의 revisions 속성으로 문서 본문 내용을 가져옵니다. origin=* 매개변수와 JSONP 모드로 크로스도메인(CORS) 요청을 처리합니다.',
        '웹 크롤러(Web Crawler)는 웹 페이지를 자동으로 탐색하는 프로그램으로, 검색 엔진의 핵심 구성 요소입니다. 이 크롤러는 gotSearch()에서 검색 결과 중 랜덤으로 하나를 선택하고, gotContent()에서 해당 문서의 본문에서 4글자 이상의 단어를 정규식(\\b\\w{4,}\\b)으로 추출하여 다음 검색 키워드로 사용하는 랜덤 워크(Random Walk) 방식을 채택합니다.',
        'goWiki() 함수는 콜백 기반의 재귀적 호출 구조를 가집니다. loadJSON() -> gotSearch() -> loadJSON() -> gotContent() -> goWiki() 순서로 비동기 체인이 형성되며, counter로 최대 10회까지 크롤링을 제한하여 무한 루프를 방지합니다. 이는 비동기 프로그래밍에서 재귀적 콜백 패턴의 좋은 예시입니다.',
        '각 크롤링 단계에서 createDiv()로 방문한 문서 제목을 DOM에 추가하여 탐색 경로를 시각적으로 보여줍니다. noCanvas()로 p5.js 캔버스를 생성하지 않고 DOM 요소만으로 인터페이스를 구성합니다. select("#userinput")으로 HTML의 input 요소와 연결하여 사용자 입력을 받습니다.',
        '위키피디아의 "Six degrees of Wikipedia" 현상처럼, 임의의 두 문서 사이를 평균 3~4번의 링크 클릭으로 연결할 수 있다는 소규모 세계 네트워크(Small World Network) 특성이 있습니다. 이 크롤러는 이러한 네트워크 구조를 랜덤하게 탐색하며, 주제 간의 의외의 연결고리를 발견하는 재미를 제공합니다.',
    ],
})
