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
        { title: 'Wikipedia: 문맥 자유 문법', url: 'https://ko.wikipedia.org/wiki/%EB%AC%B8%EB%A7%A5_%EC%9E%90%EC%9C%A0_%EB%AC%B8%EB%B2%95' },
        { title: 'Tracery by Kate Compton', url: 'https://tracery.io/' },
        { title: 'Wikipedia: Chomsky hierarchy', url: 'https://en.wikipedia.org/wiki/Chomsky_hierarchy' },
    ],
    tags: ['CFG', 'grammar', 'tracery', 'generation'],
    difficulty: 'intermediate',
    explanation: [
        '문맥 자유 문법(Context-Free Grammar, CFG)은 노엄 촘스키(Noam Chomsky)가 1956년에 제안한 형식 문법 체계의 한 종류입니다. 촘스키 계층(Chomsky hierarchy)에서 Type-2에 해당하며, 프로그래밍 언어의 구문 분석(parsing)과 자연어의 구조 분석에 핵심적으로 사용됩니다.',
        'CFG는 비단말 기호(non-terminal)와 단말 기호(terminal)로 구성됩니다. rules 객체에 S(문장) → NP+VP, NP(명사구) → Det+Adj+N 같은 생성 규칙을 정의합니다. expand() 함수는 재귀적으로 동작하여, 비단말 기호를 만나면 random()으로 규칙 하나를 선택하고 각 요소를 다시 확장합니다.',
        'tracery.js는 UC Santa Cruz의 Kate Compton이 개발한 스토리 문법 라이브러리입니다. 태그(#symbol#), 수식어(.capitalize, .s), 액션([key:value])을 지원하는 범용 CFG 엔진으로, 인터랙티브 픽션, 트위터 봇, 게임 대사 생성 등에 널리 사용됩니다.',
        '문맥 자유 문법은 프로그래밍 언어 컴파일러의 파서(parser), JSON/XML 같은 데이터 포맷의 구문 정의, 그리고 절차적 콘텐츠 생성(procedural content generation)에 활용됩니다. L-시스템(L-system)도 CFG의 변형으로 식물 구조를 생성하는 데 사용됩니다.',
    ],
})
