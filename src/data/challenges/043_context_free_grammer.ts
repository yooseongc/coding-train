import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '043_context_free_grammer',
    number: 43,
    title: 'Context Free Grammar',
    categoryId: 'text-nlp',
    description: '문맥 자유 문법(CFG) 규칙을 재귀적으로 확장하여 랜덤 문장을 자동 생성합니다.',
    files: ['tracery.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #43: Context Free Grammar', url: 'https://thecodingtrain.com/challenges/43-context-free-grammar' },
    ],
    tags: ['CFG', 'grammar', 'tracery', 'generation'],
    difficulty: 'intermediate',
    explanation: [
        '문맥 자유 문법(CFG)은 비단말 기호(S, NP, VP 등)를 규칙에 따라 확장하여 문장을 생성합니다. rules 객체에 S(문장), NP(명사구), VP(동사구), Det(관사), N(명사), Adj(형용사) 등의 생성 규칙을 정의합니다.',
        'expand() 함수는 재귀적으로 동작합니다. 기호가 rules에 존재하면 random()으로 규칙 하나를 선택하고, 각 요소에 대해 다시 expand()를 호출합니다. 규칙에 없으면 터미널 단어로 판단하여 결과 배열에 추가합니다.',
        'tracery.js는 Kate Compton의 스토리 문법 라이브러리로, 태그(#symbol#), 수식어(.capitalize, .s), 액션([key:value])을 지원하는 범용 CFG 엔진입니다.',
        '버튼 클릭 시 contextFreeGrammer()가 호출되어 S(문장)부터 확장을 시작하고, expansion 배열을 join(" ")으로 합쳐 createP()로 출력합니다.',
    ],
})
