import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '037_diastic_machine',
    number: 37,
    title: 'Diastic Machine',
    categoryId: 'text-nlp',
    description: 'Jackson Mac Low의 Diastic 기법으로 원문 텍스트에서 파운드 포에트리(found poetry)를 생성합니다.',
    files: ['sketch.js', 'rainbow.txt'],
    libraries: [],
    bodyHtml: '<input id="seed" value="rainbow" /> <button id="submit">submit</button>',
    references: [
        { title: 'Coding Challenge #37: Diastic Machine', url: 'https://thecodingtrain.com/challenges/37-diastic-machine' },
        { title: 'Wikipedia: Jackson Mac Low', url: 'https://en.wikipedia.org/wiki/Jackson_Mac_Low' },
        { title: 'Wikipedia: Acrostic (이합체시)', url: 'https://en.wikipedia.org/wiki/Acrostic' },
        { title: 'p5.js Reference: loadStrings()', url: 'https://p5js.org/reference/p5/loadStrings/' },
    ],
    tags: ['diastic', 'text', 'poetry', 'algorithm'],
    difficulty: 'beginner',
    explanation: [
        'Diastic 기법은 시드 단어의 각 글자를 순서대로 사용하여 원문에서 단어를 추출하는 알고리즘입니다. 이합체시(acrostic)와 유사하지만, i번째 글자가 단어의 i번째 위치에 있어야 하는 점이 다릅니다. 예를 들어 시드가 "rainbow"이면 첫 단어는 0번째 위치에 "r"이 있는 단어, 두 번째 단어는 1번째 위치에 "a"가 있는 단어를 찾습니다.',
        'Diastic 기법은 미국의 실험 시인이자 작곡가인 잭슨 맥 로우(Jackson Mac Low, 1922-2004)가 개발한 절차적 시 창작법입니다. 그는 우연성(chance operation)과 알고리즘을 이용해 시를 생성하는 언어 예술(Language Art) 운동의 선구자로, 존 케이지(John Cage)와 함께 뉴욕 아방가르드 예술계에서 활동했습니다.',
        'loadStrings()로 rainbow.txt를 불러온 뒤 splitTokens()로 공백과 구두점을 기준으로 단어 배열을 생성합니다. 시드 문자열에서 공백을 제거하고 소문자로 변환한 뒤, diastic() 함수가 시드의 i번째 글자와 일치하는 단어를 currentWord 위치부터 순방향으로 검색합니다.',
        'noCanvas()로 캔버스 없이 DOM 요소만 사용합니다. select()로 HTML의 입력 필드와 버튼을 연결하고, mousePressed 이벤트로 시드를 받아 결과를 createP()로 출력합니다. 시드를 바꾸면 같은 원문에서 전혀 다른 파운드 포에트리(found poetry)가 생성됩니다.',
        '이 기법은 절차적 생성(procedural generation)의 문학적 응용으로, 원문의 어휘와 분위기를 유지하면서도 예측 불가능한 새로운 텍스트를 만들어냅니다. 현대의 생성형 텍스트 아트, 봇 시(bot poetry), 트위터 봇 등 디지털 문학 창작에도 영향을 준 개념입니다.',
    ],
})
