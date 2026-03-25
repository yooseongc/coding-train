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
    ],
    tags: ['madlibs', 'text', 'generator', 'template'],
    difficulty: 'beginner',
    explanation: [
        'Mad Libs는 템플릿 문장의 빈칸(명사, 동사, 형용사 등)을 플레이어가 채워 재미있는 문장을 만드는 단어 게임입니다. tabletop.js로 Google Sheets에서 단어 데이터를 불러옵니다.',
        '템플릿 문자열에서 $$Noun$$, $$Adjective$$ 같은 패턴을 정규표현식 /\\$\\$(.*?)\\$\\$/g로 매칭합니다. replace()의 콜백에서 캡처 그룹(p1)을 키로 사용하여 데이터에서 랜덤 항목을 선택합니다.',
        'Tabletop.init()으로 Google Sheets의 공개 키를 사용해 비동기로 데이터를 로드합니다. 버튼 클릭 시 random(data)로 랜덤 행을 선택하고 createP()로 결과를 출력합니다.',
    ],
})
