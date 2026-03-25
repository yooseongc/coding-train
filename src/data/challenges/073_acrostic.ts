import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '073_acrostic',
    number: 73,
    title: 'Acrostic',
    categoryId: 'text-nlp',
    description: 'Datamuse API를 활용하여 입력한 단어의 각 글자로 시작하는 단어를 찾아 이합체시(acrostic)를 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    bodyHtml: '<p>word: <input id="wordinput" value="rainbow" /> <button id="submitbutton">submit</button></p>',
    references: [
        { title: 'Coding Challenge #73: Acrostic', url: 'https://thecodingtrain.com/challenges/73-acrostic' },
    ],
    tags: ['acrostic', 'text', 'poetry', 'word'],
    difficulty: 'beginner',
    explanation: [
        '이합체시(Acrostic)는 각 행의 첫 글자를 조합하면 다른 뜻의 단어가 나타나는 시 형식입니다. 사용자가 입력한 단어의 각 문자로 시작하는 랜덤 단어를 API로 가져와 세로드립을 만듭니다.',
        'Datamuse API의 sp(spelled like) 파라미터에 글자+와일드카드(*)를 전달하여 해당 글자로 시작하는 단어 목록을 가져옵니다. loadJSON()으로 비동기 요청하고, 결과에서 random()으로 하나를 선택합니다.',
        'noCanvas()로 캔버스 없이 DOM만 사용합니다. select()로 HTML의 input과 button을 가져오고, button.mousePressed()에 makeAcrostic 함수를 연결합니다. 각 글자마다 createDiv()로 새 행을 생성합니다.',
    ],
})
