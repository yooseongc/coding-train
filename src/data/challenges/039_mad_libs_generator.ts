import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '039_mad_libs_generator',
    number: 39,
    title: 'Mad Libs Generator',
    categoryId: 'text-nlp',
    description: 'Google Sheets 데이터와 정규표현식 치환으로 Mad Libs 문장 게임을 생성합니다.',
    files: ['sketch.js', 'madlibs.txt'],
    libraries: [],
    codeOnly: true,
    notice: '이 챌린지는 Google Sheets 연동을 위한 Tabletop.js 라이브러리가 필요합니다. 해당 서비스가 중단되어 실행할 수 없습니다.',
    references: [
        { title: 'Coding Challenge #39: Mad Libs Generator', url: 'https://thecodingtrain.com/challenges/39-mad-libs-generator' },
        { title: 'Wikipedia: Mad Libs', url: 'https://en.wikipedia.org/wiki/Mad_Libs' },
        { title: 'MDN: String.prototype.replace()', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace' },
    ],
    tags: ['madlibs', 'text', 'generator', 'template'],
    difficulty: 'beginner',
    explanation: [
        'Mad Libs는 1953년 레너드 스턴(Leonard Stern)과 로저 프라이스(Roger Price)가 발명한 단어 게임입니다. 템플릿 문장의 빈칸(명사, 동사, 형용사 등)을 플레이어가 문맥 모르게 채워 넣으면 예상치 못한 재미있는 문장이 완성됩니다. 미국에서 가장 인기 있는 파티 게임 중 하나로, 프로그래밍에서는 템플릿 치환(template substitution)의 좋은 예시입니다.',
        '템플릿 문자열에서 $$Noun$$, $$Adjective$$ 같은 플레이스홀더를 정규표현식 /\\$\\$(.*?)\\$\\$/g로 매칭합니다. 여기서 .*?는 비탐욕적(non-greedy) 매칭으로 가장 짧은 일치를 찾습니다. replace()의 콜백 함수에서 캡처 그룹(p1)을 키로 사용하여 데이터 객체에서 해당 품사의 랜덤 단어를 선택합니다.',
        'Tabletop.init()으로 Google Sheets의 공개 키를 사용해 비동기로 데이터를 로드합니다. 이 패턴은 비개발자도 스프레드시트로 콘텐츠를 관리할 수 있게 해주는 간단한 CMS(Content Management System) 역할을 합니다.',
        '이 챌린지는 정규표현식의 캡처 그룹과 replace() 콜백의 조합이라는 강력한 텍스트 처리 패턴을 보여줍니다. 같은 기법은 메일 머지, 코드 생성기, 챗봇 응답 템플릿 등 다양한 곳에서 활용됩니다.',
    ],
})
