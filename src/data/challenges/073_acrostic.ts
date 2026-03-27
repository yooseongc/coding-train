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
        { title: '위키백과: 이합체시', url: 'https://ko.wikipedia.org/wiki/%EC%9D%B4%ED%95%A9%EC%B2%B4%EC%8B%9C' },
        { title: 'Wikipedia: Acrostic', url: 'https://en.wikipedia.org/wiki/Acrostic' },
        { title: 'Datamuse API 문서', url: 'https://www.datamuse.com/api/' },
    ],
    tags: ['acrostic', 'text', 'poetry', 'word'],
    difficulty: 'beginner',
    explanation: [
        '이합체시(Acrostic)는 각 행의 첫 글자를 조합하면 숨겨진 단어나 메시지가 나타나는 시 형식입니다. 고대 그리스와 로마 시대부터 사용된 문학 기법으로, 히브리어 성경의 시편 119편도 알파벳 순서의 이합체시 구조를 가지고 있습니다. 한국어로는 "세로드립"이라는 표현과도 관련이 있습니다.',
        'Datamuse API는 영어 단어의 의미, 발음, 철자 관계를 검색할 수 있는 무료 단어 검색 API입니다. sp(spelled like) 파라미터에 글자+와일드카드(*)를 전달하여 해당 글자로 시작하는 단어 목록을 가져옵니다. loadJSON()으로 비동기 요청하고 결과에서 random()으로 하나를 선택합니다.',
        'noCanvas()로 캔버스 없이 DOM만 사용합니다. select()로 HTML의 input과 button을 가져오고, button.mousePressed()에 makeAcrostic 함수를 연결합니다. 각 글자마다 createDiv()로 새 행을 생성하여 시 형태로 표시합니다.',
        '이 챌린지는 외부 API 연동과 비동기 데이터 처리를 학습하는 좋은 예시입니다. 확장하면 운율 맞추기(rhyme), 의미 관련어 찾기(means like) 등 Datamuse API의 다른 기능을 활용하여 더 정교한 시 생성기를 만들 수 있습니다.',
    ],
})
