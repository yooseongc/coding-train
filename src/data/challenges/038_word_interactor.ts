import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '038_word_interactor',
    number: 38,
    title: 'Word Interactor',
    categoryId: 'text-nlp',
    description: '입력된 텍스트의 각 단어에 마우스 오버 시 색상이 변하는 인터랙티브 텍스트를 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    bodyHtml: '<textarea cols="50" id="input" rows="4">A rainbow is a meteorological phenomenon.</textarea><button id="submit">submit</button><p id="output"></p>',
    references: [
        { title: 'Coding Challenge #38: Word Interactor', url: 'https://thecodingtrain.com/challenges/38-word-interactor' },
        { title: 'MDN: String.prototype.split()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split' },
        { title: 'MDN: 정규표현식 캡처 그룹', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences' },
        { title: 'p5.js Reference: createSpan()', url: 'https://p5js.org/reference/p5/createSpan/' },
    ],
    tags: ['word', 'interactive', 'text', 'DOM'],
    difficulty: 'beginner',
    explanation: [
        'noCanvas()로 캔버스 없이 순수 DOM 조작으로 구현합니다. 텍스트 입력 필드(#input)에서 문자열을 받아 정규표현식 /(\\W+)/로 단어와 구분자를 분리합니다. 여기서 핵심은 캡처 그룹을 사용한 split()인데, 일반적인 split()은 구분자를 버리지만 캡처 그룹이 있으면 구분자도 결과 배열에 포함됩니다.',
        '각 토큰을 createSpan()으로 감싸고, 비단어(\\W+) 패턴이 아닌 실제 단어에만 mouseOver 이벤트를 등록합니다. highlight() 함수에서 random(255)로 R, G, B 값을 각각 생성하여 background-color CSS 스타일을 적용합니다. 마우스를 올릴 때마다 랜덤 색상으로 바뀌어 시각적 피드백을 줍니다.',
        '이 챌린지는 정규표현식(Regular Expression)의 실용적 활용을 보여줍니다. 정규표현식은 1951년 수학자 스티븐 클레이니(Stephen Kleene)가 정규 언어(regular language) 이론에서 도입한 개념으로, 현대 프로그래밍에서 텍스트 처리의 핵심 도구입니다.',
        'p5.js의 DOM 조작 함수(noCanvas, createSpan, select)를 사용하면 캔버스 기반 드로잉 없이도 인터랙티브 웹 애플리케이션을 만들 수 있습니다. 이 패턴은 텍스트 기반 챌린지에서 자주 활용되며, 워드 클라우드나 인터랙티브 시각화 등으로 확장할 수 있습니다.',
    ],
})
