import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '016_L_system_fractal_trees',
    number: 16,
    title: 'L-System Fractal Trees',
    categoryId: 'fractals',
    description: 'L-System 규칙으로 프랙탈 트리를 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #16: L-System Fractal Trees', url: 'https://thecodingtrain.com/challenges/16-l-system-fractal-trees' },
        { title: 'Wikipedia: L-system', url: 'https://en.wikipedia.org/wiki/L-system' },
        { title: 'Wikipedia: Barnsley fern', url: 'https://en.wikipedia.org/wiki/Barnsley_fern' },
        { title: 'Algorithmic Botany (University of Calgary)', url: 'http://algorithmicbotany.org/' },
    ],
    tags: ['L-system', 'fractal', 'tree', 'grammar'],
    difficulty: 'intermediate',
    explanation: [
        'L-System(Lindenmayer System)은 1968년 헝가리 출신 이론 생물학자 아리스티드 린덴마이어(Aristid Lindenmayer)가 식물 세포의 성장 과정을 모델링하기 위해 고안한 병렬 재작성 시스템(parallel rewriting system)입니다. 형식적으로 G = (V, ω, P)의 튜플로 정의되며, V는 변수와 상수, ω는 초기 문자열(axiom), P는 생성 규칙입니다.',
        'axiom "F"에서 시작하여 규칙(F → FF+[+F-F-F]-[-F+F+F])을 매 세대 병렬 적용합니다. turtle() 함수가 생성된 문자열을 해석하는 터틀 그래픽스(turtle graphics) 방식으로, F는 전진, +/-는 좌우 회전, [/]는 상태 저장/복원입니다.',
        'generate() 버튼을 클릭할 때마다 문자열 길이가 지수적으로 증가하며, len을 절반으로 줄여 화면 내 크기를 유지합니다. radians(25)의 분기 각도는 Barnsley fern(반슬리 고사리) 패턴에서 사용하는 값으로, 자연스러운 식물 형태를 만듭니다.',
        'L-System은 컴퓨터 그래픽스의 식물 모델링, 도시 설계, 음악 작곡, 건축 패턴 생성 등에 광범위하게 활용됩니다. 캘거리 대학의 Algorithmic Botany 연구 그룹이 이 분야의 대표적 연구 기관으로, 가상 식물 생성의 표준 교재인 "The Algorithmic Beauty of Plants"를 출간했습니다.',
    ],
})
