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
    ],
    tags: ['diastic', 'text', 'poetry', 'algorithm'],
    difficulty: 'beginner',
    explanation: [
        'Diastic 기법은 시드 단어의 각 글자를 순서대로 사용하여 원문에서 단어를 추출하는 알고리즘입니다. 이합체시(acrostic)와 유사하지만, i번째 글자가 단어의 i번째 위치에 있어야 합니다.',
        'loadStrings()로 rainbow.txt를 불러온 뒤 splitTokens()로 공백과 구두점을 기준으로 단어 배열을 만듭니다. 시드 문자열에서 공백을 제거하고 소문자로 변환하여 처리합니다.',
        'diastic() 함수는 시드의 i번째 글자(c)와 일치하는 단어를 currentWord 위치부터 순방향으로 검색합니다. 찾으면 결과에 추가하고 currentWord를 갱신하여 다음 글자로 진행합니다.',
        'noCanvas()로 캔버스 없이 DOM 요소만 사용합니다. select()로 입력 필드와 버튼을 연결하고, mousePressed 이벤트로 시드를 받아 결과를 createP()로 출력합니다.',
    ],
})
