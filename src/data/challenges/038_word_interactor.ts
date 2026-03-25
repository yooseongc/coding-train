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
    ],
    tags: ['word', 'interactive', 'text', 'DOM'],
    difficulty: 'beginner',
    explanation: [
        'noCanvas()로 캔버스 없이 순수 DOM 조작으로 구현합니다. 텍스트 입력 필드(#input)에서 문자열을 받아 정규표현식 /(\\W+)/로 단어와 구분자를 분리합니다.',
        'split()에 캡처 그룹이 포함된 정규식을 사용하면 구분자도 결과 배열에 포함됩니다. 각 단어를 createSpan()으로 감싸고, 비단어(\\W+) 패턴이 아닌 것만 mouseOver 이벤트를 등록합니다.',
        'highlight() 함수에서 this.html()로 텍스트를 변경하고, random(255)로 RGB 값을 생성하여 background-color 스타일을 적용합니다. 마우스를 올릴 때마다 랜덤 색상으로 바뀝니다.',
    ],
})
